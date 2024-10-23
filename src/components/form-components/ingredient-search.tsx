"use client";
import { getIngredients } from "@/actions/recipes";
import { RecipeIngredient } from "@/types/recipes";
import { useState } from "react";

const IngredientSearch = ({
  onIngredientAdd,
}: {
  onIngredientAdd: (ingredient: RecipeIngredient) => void;
}) => {
  const [ingredientName, setIngredientName] = useState<string>("");
  const [ingredientQuantity, setIngredientQuantity] = useState<number>(0);
  const [ingredientUnit, setIngredientUnit] = useState<string>("g");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestions = async (input: string) => {
    try {
      const existingIngredients = await getIngredients(input);
      setSuggestions(existingIngredients);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleIngredientNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setIngredientName(value);

    if (value.trim()) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddIngredient = () => {
    if (ingredientName.trim() && ingredientQuantity > 0) {
      const newIngredient: RecipeIngredient = {
        name: ingredientName.trim(),
        quantity: ingredientQuantity,
        unit: ingredientUnit,
        weight: 1,
      };
      onIngredientAdd(newIngredient);

      setIngredientName("");
      setIngredientQuantity(0);
      setIngredientUnit("kg");
      setSuggestions([]);
    }
  };

  // Handle selecting a suggestion
  const handleSelectSuggestion = (suggestion: string) => {
    setIngredientName(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2">
        Ingredients
      </label>
      <div className="mb-2 relative">
        <input
          type="text"
          name="ingredient_name"
          value={ingredientName}
          onChange={handleIngredientNameChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Nombre del ingrediente"
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-black border border-gray-600 rounded w-full mt-1 z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="cursor-pointer p-2 hover:bg-gray-700 text-white"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex mb-2">
        <input
          type="number"
          name="ingredient_quantity"
          value={ingredientQuantity}
          onChange={(e) => setIngredientQuantity(Number(e.target.value))}
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline mr-2"
          placeholder="Cantidad"
          min="0"
        />
        <select
          value={ingredientUnit}
          name="ingredient_unit"
          onChange={(e) => setIngredientUnit(e.target.value)}
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="g">g</option>
          <option value="kg">kg</option>
          <option value="oz">oz</option>
          <option value="tsp">tsp</option>
          <option value="tbsp">tbsp</option>
          <option value="pz">pz</option>
          <option value="cup">cup</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleAddIngredient}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

export default IngredientSearch;
