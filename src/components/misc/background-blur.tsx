export const BackgroundBlur = () => {
  return (
    <section className="h-screen w-full fixed top-0 left-0 -z-50 flex justify-center items-center bg-black">
      <section className="max-w-[800px] w-full flex flex-wrap justify-center items-center blur-[100px]">
        <div className="w-[400px] h-[400px] bg-red-500/60"></div>
        <div className="w-[400px] h-[400px] bg-yellow-300/60"></div>
        <div className="w-[400px] h-[400px] bg-green-300/60"></div>
      </section>
      <section className="absolute flex justify-center items-center blur-[100px]">
        <div className="w-[400px] h-[400px] bg-black absolute"></div>
      </section>
    </section>
  );
};
