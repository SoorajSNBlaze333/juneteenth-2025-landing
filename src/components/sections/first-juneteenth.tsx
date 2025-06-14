import fjImage from "../../assets/section-3/fj-ai.webp";
import fjImageCelebrations from "../../assets/section-3/fj-old.webp";
import fjImageCelebrationsNew from "../../assets/section-3/first-juneteenth-celebs.webp";
import { TitleFirstJuneteenth } from "../titles/title-first-juneteenth";
import { FirstCelebration } from "../quotes/first-celebration";
import { ImageWrapper } from "../misc/image-wrapper";

export const FirstJuneteenthCelebration = () => {
  return (
    <>
      <TitleFirstJuneteenth />
      <div className="border-r-2 border-slate-100/20 row-start-2 row-span-2 col-start-1 col-span-1 p-4 flex justify-end items-start">
        <ImageWrapper
          className="h-[80%] w-72 rounded-lg"
          description="Ai's interpretation of The First Juneteenth Celebrations - 1872."
          image={fjImage}
        />
      </div>
      <div className="border-l-2 border-slate-100/20 row-start-1 row-span-2 col-start-3 col-span-2 p-4 flex justify-start items-end">
        <FirstCelebration />
      </div>
      <div className="border-t-2 border-slate-100/20 row-start-3 row-span-1 col-start-2 col-span-2 p-4 flex justify-start items-start gap-4">
        <ImageWrapper
          className="h-full w-[100%] rounded-lg"
          description="The First Juneteenth Celebrations - 1872."
          image={fjImageCelebrations}
          imageClassName="relative"
        />
        <ImageWrapper
          className="h-full w-[100%] rounded-lg"
          description="The First Juneteenth Celebrations"
          image={fjImageCelebrationsNew}
          imageClassName="relative mt-10 2xl:mt-20"
        />
      </div>
    </>
  );
};
