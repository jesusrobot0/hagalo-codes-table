"use client";

export function Form() {
  return (
    <form className="">
      <label className="mb-6 flex flex-col gap-2">
        Título del producto
        <input
          type="text"
          placeholder="Ej. Brida de dos patas"
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
        />
      </label>

      <label className="mb-6 flex flex-col gap-2">
        Código del producto
        <input
          type="text"
          placeholder="Ej. 6969420"
          className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md"
        />
      </label>

      <label className="mb-6 flex flex-col gap-2">
        Categoría
        <select className="h-14 px-4 text-x border-2 border-[#edf0f3] rounded-md">
          <option value="">LALALA</option>
          <option value="">LALALA</option>
          <option value="">LALALA</option>
          <option value="">LALALA</option>
        </select>
      </label>

      <button
        type="submit"
        className="w-[250px] py-4 rounded font-bold text-white bg-[#d03c34] hover:bg-[#d6524b]"
      >
        Guardar
      </button>
    </form>
  );
}
