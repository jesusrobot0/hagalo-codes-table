"use server";

import prisma from "@/libs/prisma";
import { Product } from "@prisma/client";

export async function getProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany();

    return products;
  } catch (error) {
    throw new Error(`Error in obtaining products: ${error}`);
  }
}
