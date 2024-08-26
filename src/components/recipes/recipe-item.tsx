import { RecipePreview } from "@/types/recipes";
import Image from "next/image";
import Link from "next/link";

// const handleAddToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
//   event.preventDefault();
//   event.stopPropagation();
//   alert("You clicked Add to Favorites");
// };

export function RecipeItem({ recipe }: { recipe: RecipePreview }) {
  return (
    <li className="break-inside-avoid">
      <a href="#" className="group relative block">
        <div className="relative cursor-pointer before:absolute before:z-10 before:h-full before:w-full before:rounded-3xl before:opacity-50 hover:before:bg-gray-600">
          <Image
            src={recipe.recipe_image}
            alt={recipe.recipe_name}
            width={500}
            height={500}
            className="relative z-0 w-full cursor-pointer rounded-3xl object-cover transition-opacity duration-300 group-hover:opacity-20"
          />

          <div className="absolute bottom-4 left-4 z-20 flex flex-col items-start px-4 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-lg font-bold text-white">
              {recipe.recipe_name}
            </h3>
            <p className="mt-1 text-sm text-gray-200">{recipe.creator_name}</p>
          </div>

          <button className="absolute right-4 top-4 z-30 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white opacity-0 transition-colors hover:bg-red-600 group-hover:opacity-100">
            Add to Favorites
          </button>
        </div>
      </a>
    </li>
  );
}
