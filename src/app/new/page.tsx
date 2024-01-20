import { Form, TitlePage } from "@/components";

async function getCategories() {
  const response = await fetch("http://localhost:3000/api/categories");
  const data = await response.json();
  return data;
}

export default async function NewProductPage() {
  const categories = await getCategories();

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-2/3">
        <TitlePage title="Agregar producto" />
        <Form categories={categories} />
      </div>
    </div>
  );
}
