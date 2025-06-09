export const Title = ({ year }: { year: number }) => {
  const className = "text-4xl font-bold text-white";

  if (year === 1863) {
    return <p className={className}>The Emancipation Proclamation</p>;
  } else if (year === 1865) {
    return <p className={className}>The General Order No. 3</p>;
  } else if (year === 1872) {
    return <p className={className}>The First Juneteenth Celebrations</p>;
  } else if (year === 1980) {
    return <p className={className}>The First Official Holiday in Texas</p>;
  } else if (year === 2021) {
    return <p className={className}>Federal Holiday in the US</p>;
  }
  return <p className={className}>Transitioning</p>;
};
