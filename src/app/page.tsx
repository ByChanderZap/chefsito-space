import { RecipesGrid } from "@/components/recipes/recipes-grid";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <section className="px-0 md:px-5">
        <h2 className="py-5 text-center text-3xl font-semibold md:text-left">
          Some of our recipes
        </h2>
      </section>
      <RecipesGrid></RecipesGrid>
    </main>
  );
}
