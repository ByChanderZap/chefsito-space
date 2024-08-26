'use server'

import recipesData from '@/mocks/recipes.mock.json'
import { Recipe, RecipePreview } from "@/types/recipes";

const recipes: Recipe[] = recipesData;

export async function getRecipesPreview (query?: string, currentPage?: number): Promise<RecipePreview[]> {
  const recipesPreview = recipes
    .filter((recipe) => recipe.recipe_name === query)
    .map<RecipePreview>((recipe) => {
      return {
      recipe_id: recipe.recipe_id,
      recipe_name: recipe.recipe_name,
      recipe_slug: recipe.recipe_slug,
      recipe_country: recipe.recipe_country,
      recipe_image: recipe.recipe_image,
      creator_name: recipe.creator_name
    }
  })

  return recipesPreview
}

export async function fetchAllRecipesPreview (): Promise<RecipePreview[]> {
  const recipesPreview = recipes.map<RecipePreview>((recipe) => {
    return {
      recipe_id: recipe.recipe_id,
      recipe_name: recipe.recipe_name,
      recipe_slug: recipe.recipe_slug,
      recipe_country: recipe.recipe_country,
      recipe_image: recipe.recipe_image,
      creator_name: recipe.creator_name
    }
  })

  return recipesPreview
}