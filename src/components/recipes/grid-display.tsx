import { RecipesGrid } from "./recipes-grid";

export function GridDisplay() {
  return (
    <>
      <section className="px-0 md:px-5">
        <h2 className="py-5 text-center text-3xl font-semibold md:text-left">
          Some of our recipes
        </h2>
        <RecipesGrid />
      </section>
    </>
  );
}
