import img4 from "figma:asset/c78d8d150f4a7bafbd3af7400c962fafc83df349.png";
import imgRecrordMindCheck3 from "figma:asset/ff5d02e4a8d81411dc8a8973e6a23f542541727e.png";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[28px] items-end pointer-events-none relative size-full">
      <div className="h-[1364px] relative shrink-0 w-[629px]" data-name="4">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={img4} />
        <div aria-hidden="true" className="absolute border-0 border-[#a6a6a6] border-solid inset-0" />
      </div>
      <div className="h-[1353px] relative shrink-0 w-[635px]" data-name="recrord_mindCheck 3">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[113.05%] left-0 max-w-none top-0 w-full" src={imgRecrordMindCheck3} />
        </div>
        <div aria-hidden="true" className="absolute border-0 border-[#a6a6a6] border-solid inset-0" />
      </div>
    </div>
  );
}