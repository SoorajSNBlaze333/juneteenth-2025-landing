import { useGetHistoricTitle } from "../hooks/use-get-historic-title";

export const YearProgress = ({
  progress,
  onClick,
}: {
  progress: number;
  onClick?: (progress: number) => void;
}) => {
  const yearProgressMap = {
    0: 1863,
    0.25: 1865,
    0.5: 1872,
    0.75: 1980,
    1: 2021,
  };
  const { getTitle } = useGetHistoricTitle(yearProgressMap[0]);

  return (
    <section className="h-full flex justify-center items-center">
      <div className="h-full w-1 bg-slate-500 relative max-h-[350px]">
        <div
          className="relative z-40 left-0 h-full w-1 bg-green-300"
          style={{ height: `${progress * 100}%` }}
        />
        <div className="absolute z-50 top-0 -left-1 w-full h-full flex">
          {[0, 0.25, 0.5, 0.75, 1].map((val, index) => (
            <div
              className="absolute flex justify-center items-start cursor-pointer"
              style={{ top: `${val * 100}%` }}
              onClick={() => onClick && onClick(val)}
            >
              {/*  */}
              <div
                key={index}
                className={`w-3 h-3 relative rounded-full z-40 ${
                  progress >= val ? "bg-green-300" : "bg-slate-500"
                }`}
              >
                <p
                  className={`text-xs font-semibold absolute right-4 w-max -top-1 ${
                    progress >= val ? "text-green-300" : "text-slate-300"
                  } `}
                >
                  {`${
                    yearProgressMap[val as keyof typeof yearProgressMap]
                  } (${getTitle(
                    yearProgressMap[val as keyof typeof yearProgressMap]
                  )})`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
