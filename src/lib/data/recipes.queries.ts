import { auth } from "@/auth";
import { RecipeInput } from "@/types/recipes";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/cloudinary";
import slugify from "slugify";
import { generateRandomString } from "../utils/strings";

export const createRecipe = async (preRecipe: RecipeInput) => {
  const session = await auth()
  if (!session?.user.id) {
    throw new Error('Unauthorized');
  }
  let imageUrl = ''
  
  if (!preRecipe.imageInput) return
  try {
    imageUrl = await uploadImage(preRecipe.imageInput)
  } catch (error) {
    console.error(error)
    throw new Error("Something went wrong uploading the image")
  }
  
  const randomPrefix = generateRandomString(10)
  const sluggedText = slugify(preRecipe.name, {lower: true, trim: true})
  const slug = `${sluggedText}-${randomPrefix}`

  await prisma.$transaction(async (tx) => {
    
    // Country logic 
    const countryRecord = await tx.country.findUnique({
      where: {
        name: preRecipe.country
      }
    })

    if (!countryRecord) {
      throw new Error("Something went wrong retrieving the country")
    }

    // Recipe creation
    const recipe = await tx.recipe.create({
      data: {
        title: preRecipe.name,
        description: preRecipe.description,
        image: imageUrl,
        slug,
        instructions: preRecipe.instructions,
        userId: session?.user.id as string,
        countryId: countryRecord.id,
      }
    })

    // Ingredients logic    
    await Promise.all(
      preRecipe.ingredients.map(async(ing) => {
        let ingredientId
        ingredientId = await tx.ingredient.findFirst({
          where: { name: ing.name },
          select: { id: true },
        })
        if (!ingredientId?.id) {
          ingredientId = await tx.ingredient.create({
            data: {
              name: ing.name
            },
            select: { id: true }
          })
        }

        return await tx.recipeIngredient.create({
          data: {
            recipeId: recipe.id,
            ingredientId: ingredientId.id,
            weight: ing.weight || 1,
            quantity: ing.quantity,
            unit: ing.unit,
          }
        })
      })
    ).catch(e => {
      console.error("Something went wrong creating the recipe-ingredients", e)
      throw new Error("Something went wrong creating the recipe")
    })
  })
}
