"use client";
import { useFormState } from "react-dom";
import { useRef, useState } from "react";

import { RecipeIngredient } from "@/types/recipes";
import { createRecipeAction } from "@/actions/recipes";
import FormSubmitButton from "@/components/btns/form-submit";
import TextInput from "@/components/form-components/text-input";
import TextAreaInput from "@/components/form-components/text-area";
import IngredientSearch from "@/components/recipes/ingredient-search";
import SelectCountryInput from "@/components/recipes/select-country-input";
import DisplayIngredientes from "@/components/recipes/ingredients-display";

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
          defaultValue="que es esto"
          name="country"
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
      <DisplayIngredientes
        handleRemoveIngredient={handleRemoveIngredient}
        ingredients={ingredients}
      />

      <FormSubmitButton text="Create Recipe" loadingText="Creating Recipe..." />
    </form>
  );
}
