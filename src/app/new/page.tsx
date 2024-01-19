import { Form, TitlePage } from "@/components";

export default function NewProductPage() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <TitlePage title="Agregar producto" />
        <Form />
      </div>
    </div>
  );
}
