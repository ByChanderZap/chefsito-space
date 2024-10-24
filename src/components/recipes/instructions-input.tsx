"use client";

import { useState } from "react";

interface InstructionsInputProps {
  onInstructionAdd: (instruction: string) => void;
  alreadyContainInstructions: boolean;
  errors?: string[];
}

const InstructionsInput: React.FC<InstructionsInputProps> = ({
  onInstructionAdd,
  alreadyContainInstructions,
  errors,
}) => {
  const [instruction, setInstruction] = useState<string>("");

  const handleInstructionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setInstruction(value);
  };

  const handleAddInstruction = () => {
    if (instruction.trim()) {
      onInstructionAdd(instruction);

      setInstruction("");
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-trinidad-100 text-sm font-bold mb-4">
        Instructions
      </label>
      <div aria-live="polite" aria-atomic="true" className="my-4">
        {errors?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="instructions"
          value={instruction}
          rows={4}
          onChange={handleInstructionChange}
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white leading-tight focus:border-trinidad-600 focus:outline-none focus:ring-0"
          placeholder=" "
          required={!alreadyContainInstructions}
        />
        <label
          htmlFor="instructions"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-trinidad-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-trinidad-600"
        >
          instructions
        </label>
      </div>
      <div className="flex mb-2 gap-4 justify-end">
        <button
          type="button"
          onClick={handleAddInstruction}
          className="border-2 border-trinidad-500 py-2 px-4 md:mb-0 mb-4 rounded-md cursor-pointer bg-transparent text-trinidad-500 hover:bg-trinidad-500 hover:text-white focus:bg-trinidad-500 focus:text-white transition-colors duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InstructionsInput;
