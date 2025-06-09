import { useGetHistoricTitle } from "../hooks/use-get-historic-title";

export const Title = ({ year }: { year: number }) => {
  const { title } = useGetHistoricTitle(year);
  const className = "text-4xl font-bold text-white text-center md:text-left";

  return <p className={className}>{title}</p>;
};
