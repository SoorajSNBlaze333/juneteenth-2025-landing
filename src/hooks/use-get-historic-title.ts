import { useMemo } from "react";

export const useGetHistoricTitle = (year: number) => {
  const title = useMemo(() => {
    if (year === 1863) {
      return "The Emancipation Proclamation";
    } else if (year === 1865) {
      return "The General Order No. 3";
    } else if (year === 1872) {
      return "The First Juneteenth Celebrations";
    } else if (year === 1980) {
      return "The First Official Holiday in Texas";
    } else if (year === 2021) {
      return "Federal Holiday in the US";
    }
    return "Transitioning";
  }, [year]);

  const getTitle = (year: number) => {
    if (year === 1863) {
      return "The Emancipation Proclamation";
    } else if (year === 1865) {
      return "The General Order No. 3";
    } else if (year === 1872) {
      return "The First Juneteenth Celebrations";
    } else if (year === 1980) {
      return "The First Official Holiday in Texas";
    } else if (year === 2021) {
      return "Federal Holiday in the US";
    }
    return "Transitioning";
  };

  return {
    title,
    getTitle,
  };
};
