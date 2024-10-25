export type Recipe = {
  recipe_id:            string;
  recipe_name:          string;
  recipe_slug:          string;
  recipe_instructions:  RecipeInstruction[];
  recipe_user_id:       string;
  recipe_country:       string;
  recipe_description:   string;
  recipe_image:         string;
  recipe_ingredients:   RecipeIngredient[];
  creator_name:         string;
}

export type RecipeIngredient = {
  name:                 string;
  unit:                 string;
  weight:               number;
  quantity:             number;
}

export type RecipeInstruction = {
  instruction:          string;
  step_number:          number;
}

export type Country = {
  id:                   string;
  name:                 string;
  iso:                  string
}

export type RecipePreview = Omit<Recipe, 'recipe_instructions' | 'recipe_user_id' | 'recipe_ingredients' | 'recipe_description'> 

export type RecipeInput  = {
  name: string;
  country: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: RecipeInstruction[];
  imageInput: File | null;
}