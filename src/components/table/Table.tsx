"use client";

import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getProducts } from "@/actions/actions-products";
import { getCategoryName } from "@/utils";

const columns: ColumnDef<Product>[] = [
  { header: "Code", accessorKey: "code" },
  { header: "Título", accessorKey: "title" },
  {
    header: "Category",
    accessorKey: "categoryId",
    cell: (info) => getCategoryName(info.row.getValue(info.column.id)),
  },
];

export function Table() {
  const [data, setData] = useState<Product[]>();

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setData(products);
    })();
  }, []);

  return (
    <div>
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="text-left">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
