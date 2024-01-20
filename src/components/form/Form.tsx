"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
}

const initialState = {
  title: "",
  code: "",
  category: "",
};

export function Form({ categories }: Props) {
  const [formState, setFormState] = useState(initialState);

  const handleTitleChange = (event: React.FormEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setFormState({
      ...formState,
      title: value,
    });
  };

  const handleCodeChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setFormState({
      ...formState,
      code: value,
    });
  };

  const handleCategoryChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setFormState({
      ...formState,
      category: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        title: formState.title,
        code: Number(formState.code),
        categoryId: formState.category,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setFormState(initialState);
    toast.success(`Se a guardado correctamente ${formState.title}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Toaster position="bottom-right" gutter={8} />
      <label className="mb-6 flex flex-col gap-2">
        Título del producto
        <input
          type="text"
          placeholder="Ej. Brida de dos patas"
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
          value={formState.title}
          onChange={handleTitleChange}
        />
      </label>

      <label className="mb-6 flex flex-col gap-2">
        Código del producto
        <input
          type="number"
          placeholder="Ej. 6969420"
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
          value={formState.code}
          onChange={handleCodeChange}
        />
      </label>

      <label className="mb-6 flex flex-col gap-2">
        Categoría
        <select
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
          value={formState.category}
          onChange={handleCategoryChange}
        >
          <option>Seleccione una categoría</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="w-full sm:w-[250px] py-4 rounded font-bold text-white bg-[#d03c34] hover:bg-[#d6524b]"
      >
        Guardar
      </button>
    </form>
  );
}
