import { TitlePage } from "@/components";
import { ProductsTable } from "@/components/products-table/ProductsTable";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();
  return data;
}

export default async function ProductListPage() {
  const products = await getProducts();

  return (
    <>
      <TitlePage title="Lista de productos" />

      <ProductsTable products={products} />
    </>
  );
}
