import { getCategoryName } from "@/utils";

interface Props {
  id: string;
}

const categoryColors: Record<string, string> = {
  "437eda0a-0fb2-40a7-9408-27327097dc21": "bg-[#d5d5d5]",
  "ca020548-4176-4e81-8184-421f27475ed3": "bg-[#59bfff]",
  "21793b4d-0f2b-449d-adad-de39fd8afc4e": "bg-[#ffffe0]",
  "81354bde-e235-487e-bd3c-a780f576532f": "bg-[#95ff95]",
};

export function CategoryTag({ id }: Props) {
  const name = getCategoryName(id);

  return <span>{name}</span>;
}
