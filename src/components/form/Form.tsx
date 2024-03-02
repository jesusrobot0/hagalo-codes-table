"use client";

import { addProduct } from "@/actions/actions-products";
import { Category } from "@prisma/client";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  categories: Category[];
}

const initialState = {
  title: "",
  code: "",
  categoryId: "",
};

export function Form({ categories }: Props) {
  const [formState, setFormState] = useState(initialState);

  const handleFormChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newProduct = await addProduct(formState);
    setFormState(initialState);
    toast.success(`Se a guardado correctamente ${newProduct.title}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Toaster position="bottom-right" gutter={8} />
      <label className="mb-6 flex flex-col gap-2">
        Título del producto
        <input
          type="text"
          placeholder="Ej. Brida de dos patas"
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
          name="title"
          value={formState.title}
          onChange={handleFormChange}
        />
      </label>

      <label className="mb-6 flex flex-col gap-2">
        Código del producto
        <input
          type="text"
          placeholder="Ej. 6969420"
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
          name="code"
          value={formState.code}
          onChange={handleFormChange}
        />
      </label>

      <label className="mb-6 flex flex-col gap-2">
        Categoría
        <select
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
          name="categoryId"
          value={formState.categoryId}
          onChange={handleFormChange}
        >
          <option>Seleccione una categoría</option>
          {categories?.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="w-full sm:w-[250px] py-4 rounded font-bold text-white bg-[#283d69] hover:bg-[#3a5897]"
      >
        Guardar
      </button>
    </form>
  );
}
