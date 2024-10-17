import { RecipeIngredient, RecipeInstruction } from "@/types/recipes";
import React from "react";
import { RecipeIngredients } from "./recipe-ingredients";
import { RecipeInstructions } from "./recipe-instructions";

interface RecipeDetailsProps {
  ingredients: RecipeIngredient[];
  instructions: RecipeInstruction[];
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  ingredients,
  instructions,
}) => (
  <div className="p-6">
    <div className="grid md:grid-cols-2 gap-8">
      <RecipeIngredients ingredients={ingredients} />
      <RecipeInstructions instructions={instructions} />
    </div>
  </div>
);
