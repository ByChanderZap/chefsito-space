import { RecipePreview } from "@/types/recipes";
import { getRecipesPreview } from "@/lib/data/fetch-recipes";
import { RecipeItem } from "./recipe-item";

export async function RecipesGrid({
  query,
  currentPage = 1,
}: {
  query?: string;
  currentPage?: number;
}) {
  const recipes: RecipePreview[] = await getRecipesPreview(query);

  return (
    <div className="px-2 md:px-0">
      <ul className="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-4">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.recipe_id} recipe={recipe}></RecipeItem>
        ))}
      </ul>
    </div>
  );
}
