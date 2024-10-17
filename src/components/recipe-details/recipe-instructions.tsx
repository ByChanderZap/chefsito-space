import { RecipeInstruction } from "@/types/recipes";

interface RecipeInstructionsProps {
  instructions: RecipeInstruction[];
}

export const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({
  instructions,
}) => (
  <div>
    <h3 className="text-lg font-semibold mb-2 text-trinidad-500">
      Instructions
    </h3>
    <ol className="list-decimal list-inside text-trinidad-100">
      {instructions.map((instruction) => (
        <li key={instruction.step_number} className="mb-2">
          {instruction.instruction}
        </li>
      ))}
    </ol>
  </div>
);
