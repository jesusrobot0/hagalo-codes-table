import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const { title, code, categoryId } = await request.json();

  const newNote = await prisma.product.create({
    data: {
      title,
      code: Number(code),
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  return NextResponse.json(newNote);
}
