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

  return (
    <section className="w-full col-span-4 mt-5 flex justify-center items-center">
      <div className="h-1 w-full bg-slate-500 relative max-w-[700px]">
        <div
          className="relative z-40 left-0 h-1 bg-red-500"
          style={{ width: `${progress * 100}%` }}
        />
        <div className="absolute z-50 -top-1 left-0 w-full flex">
          {[0, 0.25, 0.5, 0.75, 1].map((val, index) => (
            <div
              className="absolute flex flex-col justify-start items-start cursor-pointer"
              style={{ left: `${val * 100}%` }}
              onClick={() => onClick && onClick(val)}
            >
              <div
                key={index}
                className={`w-3 h-3 rounded-full z-40 ${
                  progress >= val ? "bg-red-500" : "bg-slate-500"
                }`}
              />
              <p className="text-sm text-slate-300">
                {yearProgressMap[val as keyof typeof yearProgressMap]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
