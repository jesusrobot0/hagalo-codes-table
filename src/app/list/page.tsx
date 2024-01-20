import { TitlePage } from "@/components";
import { ProductsTable } from "@/components/products-table/ProductsTable";

export default function ProductListPage() {
  return (
    <>
      <TitlePage title="Lista de productos" />

      <ProductsTable />
    </>
  );
}
