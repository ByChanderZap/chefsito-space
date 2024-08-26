import { GridDisplay } from "@/components/recipes/grid-display";
import { Search } from "@/components/search";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-xl pt-24 pb-24 mx-auto">
        <Search placeholder="Try to find something delicious to cook"></Search>
      </div>
      <GridDisplay />
    </main>
  );
}
