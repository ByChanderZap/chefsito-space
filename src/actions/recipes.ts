'use server';

import { prisma } from "@/lib/prisma";

export const getCountries = async () => {
  return await prisma.country.findMany();
};


// Mock data for demonstration
const mockIngredients = ["banana", "beans", "apple", "orange", "carrot", "potato", "algo", "algo mas"];

export async function getIngredients(searchTerm: string) {
  if (!searchTerm) return [];
  
  // Convert the search term to lower case for a case-insensitive comparison
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
  // Filter the mock data based on the search term
  const matchingIngredients = mockIngredients.filter(ingredient => 
    ingredient.toLowerCase().includes(lowerCaseSearchTerm)
  );

  return matchingIngredients;

  // const ingredients = await prisma.ingredient.findMany({
//   where: {
//     name: {
//       contains: searchTerm,
//       mode: 'insensitive', // Búsqueda sin mayúsculas/minúsculas
//     },
//   },
//   select: {
//     name: true,
//   },
// });

// return ingredients.map(ingredient => ingredient.name);

}

export async function createRecipeAction(prevState: any, formData: FormData) {
  // Convert the keys iterator to an array
  // const keysArray = Array.from(formData.keys());
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`); // Log each key-value pair
  }
  // const ings = formData.getAll("ingredient_name")
  // console.log(ings)
  // Log the keys to the console
  // console.log(keysArray);
  return {};
}
