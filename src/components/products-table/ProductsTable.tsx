import { Product } from "@prisma/client";
import { MoreVertical } from "lucide-react";

interface Props {
  products?: Product[];
}

export function ProductsTable({ products = [] }: Props) {
  return (
    <div>
      <table className="w-full border-[1px] border-[#dadada] text-sm sm:text-base">
        <thead>
          <tr className="border-b-[1px] border-[#ccc] bg-[#fbfcfc]">
            <th className="text-left p-3">Título</th>
            <th className="text-left p-3">Código</th>
            <th className="text-left p-3">Categoría</th>
            <th className="text-left p-3"></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id} className="border-b-[1px] border-[#ccc]">
              <td className="text-left p-2">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] bg-orange-200 hidden md:block"></div>
                  <span>{product.title}</span>
                </div>
              </td>
              <td className="text-left p-2">{product.code}</td>
              <td className="text-left p-2">{product.id}</td>
              <td className="text-left p-2">
                <div className="flex justify-end items-center">
                  <button>
                    <MoreVertical />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
