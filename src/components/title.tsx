import { useGetHistoricTitle } from "../hooks/use-get-historic-title";

export const Title = ({ year }: { year: number }) => {
  const { title } = useGetHistoricTitle(year);
  const className = "text-4xl font-bold text-white";

  return <p className={className}>{title}</p>;
};
