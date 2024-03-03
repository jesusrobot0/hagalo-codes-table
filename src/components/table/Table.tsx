"use client";

import { FormEvent, useEffect, useState } from "react";
import { Product } from "@prisma/client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getProducts } from "@/actions/actions-products";
import { CategoryTag } from "..";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

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
  const [filtering, setFiltering] = useState("");
  const [data, setData] = useState<Product[]>();

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter: filtering },
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
    onGlobalFilterChange: setFiltering,
  });

  // Méodos de la paginación
  const handlePrevious = () => {
    table.previousPage();
  };

  const handleNext = () => {
    const currentPage = table.getState().pagination.pageIndex + 2;
    const totalPages = table.getPageCount();

    if (currentPage > totalPages) return;

    table.nextPage();
  };

  // Métodos de la busqueda
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setFiltering((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setData(products);
    })();
  }, []);

  return (
    <div>
      <div className="mb-4 flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center border border-[#ccc]">
          <button className="p-3 bg-white">
            <Search color="#283d69" />
          </button>
          <input
            type="text"
            placeholder="Buscar en la tabla"
            className="w-[320px] p-2 md:p-3 border-l border-l-[#ccc] focus:outline-none  lg:w-[420px]"
            value={filtering}
            onChange={handleSearch}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white p-2 md:p-3 border border-[#ccc]">
            <span className="text-gray-400">
              Items <span className="hidden md:visible"> por página:</span>
            </span>
            <select
              className="focus:outline-none cursor-pointer"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[2, 4, 8, 16, 32].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 border border-[#ccc] bg-white">
            <button
              onClick={handlePrevious}
              className="border-r border-r-[#ccc] p-2 md:p-3 "
            >
              <ChevronLeft color="#283d69" />
            </button>
            <p className="p-2 md:p-3  text-gray-400">
              <span className="text-gray-800">
                {table.getState().pagination.pageIndex + 1}
              </span>
              <span> de </span>
              {table.getPageCount()}
            </p>
            <button
              onClick={handleNext}
              className="border-l border-l-[#ccc] p-2 md:p-3 "
            >
              <ChevronRight color="#283d69" />
            </button>
          </div>
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
