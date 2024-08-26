"use client";

const handleAddToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  event.stopPropagation();
  alert("You clicked Add to Favorites");
};

export function FavButton() {
  return (
    <button
      onClick={handleAddToFavorites}
      className="absolute right-4 top-4 z-30 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white opacity-0 transition-colors hover:bg-red-600 group-hover:opacity-100"
    >
      Add to Favorites
    </button>
  );
}
