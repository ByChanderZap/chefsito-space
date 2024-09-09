"use client"; // Marca este componente como un Client Component

import React, { useState, FormEvent } from "react";

type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

export default function Create() {
  // Definición de estados con tipos
  const [dishName, setDishName] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]); // Estado para almacenar un array de ingredientes con cantidad y unidad
  const [ingredientName, setIngredientName] = useState<string>(""); // Estado para el ingrediente individual
  const [ingredientQuantity, setIngredientQuantity] = useState<number>(0); // Estado para la cantidad del ingrediente
  const [ingredientUnit, setIngredientUnit] = useState<string>("g"); // Estado para la unidad de medida del ingrediente
  const [steps, setSteps] = useState<string>("");

  // Manejador para agregar un ingrediente al array
  const handleAddIngredient = () => {
    if (ingredientName.trim() && ingredientQuantity > 0) {
      const newIngredient: Ingredient = {
        name: ingredientName.trim(),
        quantity: ingredientQuantity,
        unit: ingredientUnit,
      };

      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      setIngredientName(""); // Limpiar el campo del nombre del ingrediente después de agregarlo
      setIngredientQuantity(0); // Restablecer cantidad a 0
      setIngredientUnit("g"); // Restablecer unidad a 'g'
    }
  };

  // Manejador para eliminar un ingrediente del array
  const handleRemoveIngredient = (index: number) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  // Manejador de envío de formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para agregar los datos
    console.log("Nombre del platillo:", dishName);
    console.log("Ingredientes:", ingredients);
    console.log("Pasos:", steps);

    // Restablecer los campos después de enviar
    setDishName("");
    setIngredients([]);
    setSteps("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-md w-96 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Crear Receta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Nombre del platillo
            </label>
            <input
              type="text"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ej. Tacos"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Ingrediente
            </label>
            <div className="mb-2">
              <input
                type="text"
                value={ingredientName}
                onChange={(e) => setIngredientName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre del ingrediente"
              />
            </div>
            <div className="flex mb-2">
              <input
                type="number"
                value={ingredientQuantity}
                onChange={(e) => setIngredientQuantity(Number(e.target.value))}
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline mr-2"
                placeholder="Cantidad"
                min="0"
              />
              <select
                value={ingredientUnit}
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

            {/* Centrar el botón de Añadir */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleAddIngredient}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Añadir
              </button>
            </div>

            {/* Lista de ingredientes añadidos */}
            {ingredients.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-white">
                {ingredients.map((ing, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{`${ing.quantity} ${ing.unit} de ${ing.name}`}</span>
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
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Pasos
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Describe los pasos para preparar el platillo..."
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Guardar Receta
          </button>
        </form>
      </div>
    </div>
  );
}
