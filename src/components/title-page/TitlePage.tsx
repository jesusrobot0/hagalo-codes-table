interface Props {
  title: string;
  description?: string;
}
export function TitlePage({ title, description }: Props) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="">{description}</p>
    </header>
  );
}
