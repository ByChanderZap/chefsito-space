import { z } from "zod";

const IngredientSchema = z.object({
  name: z.string().trim().min(1, { message: "Ingredient name is required." }),
  unit: z.string().trim().min(1, { message: "Unit is required." }),
  weight: z.number().positive({ message: "Weight must be a positive number." }),
  quantity: z.number().positive({ message: "Quantity must be a positive number." })
});

const InstructionSchema = z.object({
  instruction: z.string().trim().min(1, { message: "Instruction is required." }),
  step_number: z.number().int().positive({ message: "Step number must be a positive integer." }),
});


export const CreateRecipeSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Please enter a valid name.',
    })
    .min(1, { message: "Recipe name is required." })
    .max(300, { message: "Recipe name is too long." }),
  country: z.string().min(1, { message: "Invalid country." }),
  description: z
    .string()
    .min(10, { message: "Please provide a longer description." }),
  ingredients: z.array(IngredientSchema).nonempty({ message: "At least one ingredient is required." }),
  instructions: z.array(InstructionSchema).nonempty({ message: "At least one instruction is required." }),
  imageInput: z.any(),
});
