import prisma from "../libs/prisma";
import { initialData } from "./seed";

async function main() {
  // Borra registros previos
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;

  // Carga las categorias a la base de datos
  const categoriesData = categories.map((category) => ({ name: category }));
  await prisma.category.createMany({ data: categoriesData });

  // Carga los productos a la base de datos
  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name] = category.id;

    return map;
  }, {} as Record<string, string>);

  const productsData = products.map((product) => {
    return {
      title: product.title,
      code: product.code,
      categoryId: categoriesMap[product.category],
    };
  });

  productsData.map(async (product) => {
    const { title, code, categoryId } = product;
    await prisma.product.create({
      data: { title, code, categoryId },
    });
  });

  console.log("✅ Seed executed successfully");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
