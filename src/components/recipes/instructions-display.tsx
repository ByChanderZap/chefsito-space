import { RecipeInstruction } from "@/types/recipes";

interface DisplayInstructionsProps {
  instructions: RecipeInstruction[];
  handleRemoveInstruction: (index: number) => void;
}

export default function DisplayInstructions({
  instructions,
  handleRemoveInstruction,
}: DisplayInstructionsProps) {
  return (
    instructions.length > 0 && (
      <div className="mb-4">
        <h3 className="font-bold mb-2 text-lg text-white">
          Recipe Instructions:
        </h3>
        <ul className="list-decimal pl-5 space-y-1">
          {instructions.map((instruction: RecipeInstruction, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-slate-500 p-2 rounded mb-1"
            >
              <span className="text-trinidad-100">
                Step {instruction.step_number}: {instruction.instruction}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveInstruction(index)}
                className="text-red-700 hover:text-red-700 focus:outline-none"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
