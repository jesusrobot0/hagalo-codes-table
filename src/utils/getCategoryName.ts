interface CategoryMap {
  [key: string]: string;
}

export function getCategoryName(id: string) {
  const categoryNames: CategoryMap = {
    "437eda0a-0fb2-40a7-9408-27327097dc21": "Clavos y Tornillos",
    "ca020548-4176-4e81-8184-421f27475ed3": "Bisagras, Jaladeras Y Otros",
    "21793b4d-0f2b-449d-adad-de39fd8afc4e": "Coladeras Y Resumideros",
    "81354bde-e235-487e-bd3c-a780f576532f": "Manuales",
  };
  return categoryNames[id];
}
