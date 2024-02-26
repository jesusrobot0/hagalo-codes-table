export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getProducts } from "@/actions/actions-products";
import { TitlePage, ProductsTable } from "@/components";

export default async function ProductListPage() {
  const products = await getProducts();

  return (
    <>
      <TitlePage title="Lista de productos" />
      <ProductsTable products={products} />
    </>
  );
}
