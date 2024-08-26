import { RecipesGrid } from "@/components/recipes/recipes-grid";
import { Search } from "@/components/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anyone Can Cook",
};

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchInvoicesPages(query);
  // console.log(query, currentPage);
  return (
    <main className="">
      <div className="max-w-xl pt-24 pb-24 mx-auto">
        <Search placeholder="Try to find something delicious to cook"></Search>
      </div>
      <section className="px-0 md:px-5">
        <h2 className="py-5 text-center text-3xl font-semibold md:text-left">
          Some of our recipes
        </h2>
        <RecipesGrid query={query} currentPage={currentPage} />
      </section>
    </main>
  );
}
