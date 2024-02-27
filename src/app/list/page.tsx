export const dynamic = "force-dynamic";
export const revalidate = 0;

import { TitlePage, ProductsTable } from "@/components";

export default async function ProductListPage() {
  return (
    <>
      <TitlePage title="Lista de productos" />
      <ProductsTable />
    </>
  );
}
