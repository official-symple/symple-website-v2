import imgOnboarding31 from "figma:asset/cadb6a1a6919158d25dea028eb8937ef729319a1.png";
import imgOnboarding311 from "figma:asset/f8ff72a23b7738b34983a62011bf56bb07e318be.png";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative size-full">
      <div className="h-[1371px] relative shrink-0 w-[633px]" data-name="onboarding3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOnboarding31} />
      </div>
      <div className="h-[1371px] relative shrink-0 w-[633px]" data-name="onboarding3-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOnboarding311} />
      </div>
    </div>
  );
}