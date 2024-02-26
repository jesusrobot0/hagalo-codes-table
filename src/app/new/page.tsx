import { getCategories } from "@/actions/actions-products";
import { Form, TitlePage } from "@/components";

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
