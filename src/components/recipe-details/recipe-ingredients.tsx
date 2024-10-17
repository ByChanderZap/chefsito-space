import { RecipeIngredient } from "@/types/recipes";
import React from "react";

interface RecipeIngredientsProps {
  ingredients: RecipeIngredient[];
}

export const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
  ingredients,
}) => (
  <div>
    <h3 className="text-lg font-semibold mb-2 text-trinidad-500">
      Ingredients
    </h3>
    <ul className="list-disc list-inside text-trinidad-100">
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          {ingredient.name} - {ingredient.quantity} {ingredient.unit}
        </li>
      ))}
    </ul>
  </div>
);
