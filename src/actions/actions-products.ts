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

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany();

    return categories;
  } catch (error) {
    throw new Error(`Error in obtaining categories: ${error}`);
  }
}
