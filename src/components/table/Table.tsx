"use client";

import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getProducts } from "@/actions/actions-products";
import { CategoryTag } from "..";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const columns: ColumnDef<Product>[] = [
  { header: "Código", accessorKey: "code" },
  { header: "Título", accessorKey: "title" },
  {
    header: "Categoría",
    accessorKey: "categoryId",
    cell: (info) => <CategoryTag id={info.row.getValue(info.column.id)} />,
  },
];

export function Table() {
  const [data, setData] = useState<Product[]>();

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Meéodos de la paginación
  const handlePrevious = () => {
    table.previousPage();
  };

  const handleNext = () => {
    const currentPage = table.getState().pagination.pageIndex + 2;
    const totalPages = table.getPageCount();

    if (currentPage > totalPages) return;

    table.nextPage();
  };

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setData(products);
    })();
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-4 border border-[#ccc] bg-white">
          <button
            onClick={handlePrevious}
            className="border-r border-r-[#ccc] p-3"
          >
            <ChevronLeft />
          </button>
          <p className="p-3 text-gray-400">
            <span className="text-gray-800 ">
              {table.getState().pagination.pageIndex + 1}
            </span>
            <span> de </span>
            {table.getPageCount()}
          </p>
          <button onClick={handleNext} className="border-l border-l-[#ccc] p-3">
            <ChevronRight />
          </button>
        </div>
      </div>
      <table className="w-full mb-6 border border-[#ccc]">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-b-[#ccc] bg-white"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-5 text-left">
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
            <tr key={row.id} className="border-b border-b-[#ccc]">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-5">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
