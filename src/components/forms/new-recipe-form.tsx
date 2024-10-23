"use client";
import { useFormState } from "react-dom";
import { useRef, useState, useEffect } from "react";
import IngredientSearch from "../form-components/ingredient-search";
import FormSubmitButton from "../btns/form-submit-auth";
import { createRecipeAction } from "@/actions/recipes";
import TextInput from "../form-components/text-input";
import TextAreaInput from "../form-components/text-area";
import { RecipeIngredient } from "@/types/recipes";
import SelectCountryInput from "../form-components/select-country-input";

export default function NewRecipeForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(createRecipeAction, {});
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>([]);

  const handleIngredientAdd = (ingredient: RecipeIngredient) => {
    setIngredients((prev) => [...prev, ingredient]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    if (formRef.current) {
      const formElements = formRef.current
        .elements as HTMLFormControlsCollection;
      const titleInput = formElements.namedItem("title") as HTMLInputElement;
      const descriptionInput = formElements.namedItem(
        "description"
      ) as HTMLTextAreaElement;
      const countryInput = formElements.namedItem(
        "country"
      ) as HTMLSelectElement;

      formData.append("title", titleInput.value);
      formData.append("description", descriptionInput.value);
      formData.append("country", countryInput.value);
    }

    ingredients.forEach((ingredient) => {
      if (ingredient.name.trim() !== "") {
        formData.append("ingredient_name", ingredient.name);
        formData.append("ingredient_quantity", String(ingredient.quantity));
        formData.append("ingredient_unit", ingredient.unit);
      }
    });

    await formAction(formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <TextInput
          id="title"
          label="Recipe name"
          name="title"
          type="text"
          // errors={formState.errors?.title || []} // Error handling
        />
        <SelectCountryInput
          id="country"
          label="Country"
          name="country"
          defaultValue="que es esto"
          errors={[]}
        ></SelectCountryInput>
      </div>
      <div className="grid grid-cols-1">
        <TextAreaInput
          id="description"
          label="Description"
          name="description"
          rows={3}
          // errors={formState.errors?.description || []} // Error handling
        />
      </div>
      <div className="grid grid-cols-1">
        <IngredientSearch onIngredientAdd={handleIngredientAdd} />
      </div>
      {ingredients.length > 0 && (
        <div className="my-4">
          <h3 className="font-bold mb-2 text-lg">Chosen Ingredients:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>
                  {ingredient.quantity} {ingredient.unit} of {ingredient.name}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <FormSubmitButton text="Create Recipe" loadingText="Creating Recipe..." />
    </form>
  );
}
