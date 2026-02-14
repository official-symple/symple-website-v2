import img413 from "figma:asset/0b96305b9fd83d991e5971d434c3dd4579a1e269.png";
import imgRecrordMindCheck31 from "figma:asset/6546d88ce6af6a166e6018d1640df659f735ad24.png";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[47px] items-center relative size-full">
      <div className="h-[1356px] relative shrink-0 w-[629px]" data-name="4 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img413} />
      </div>
      <div className="h-[1356px] relative shrink-0 w-[629px]" data-name="recrord_mindCheck 3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRecrordMindCheck31} />
      </div>
    </div>
  );
}