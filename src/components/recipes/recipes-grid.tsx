import { RecipePreview } from "@/types/recipes";
import {
  fetchAllRecipesPreview,
  getRecipesPreview,
} from "@/lib/data/fetch-recipes";
import { RecipeItem } from "./recipe-item";

export async function RecipesGrid({
  query,
  currentPage = 1,
}: {
  query?: string;
  currentPage?: number;
}) {
  let recipes: RecipePreview[];
  query
    ? (recipes = await getRecipesPreview(query))
    : (recipes = await fetchAllRecipesPreview());

  return (
    // <div className="px-2 md:px-0">
    //   {/* className="mt-7 px-2 md:px-5 columns-2 md:columns-3 lg:columns-4 mb-4 xl:columns-5 space-y-6 mx-auto" */}
    //   <ul className="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-4">
    //     {recipes.map((recipe) => (
    //       <RecipeItem key={recipe.recipe_id} recipe={recipe} />
    //     ))}
    //   </ul>
    // </div>

    <div className="px-2 md:px-0">
      <ul className="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-4">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.recipe_id} recipe={recipe}></RecipeItem>
        ))}
      </ul>
    </div>
  );
}
