import imgAsanNanumFoundation from "figma:asset/b275de7dfab9fc411916fb65957ae9bcea40aa99.png";
import imgImage29 from "figma:asset/c56e2ede50f08f3979a70535923fa6dd3718d035.png";
import img202510291516281 from "figma:asset/a54db57541ad162250b6eb5671bc6d6f5af0869c.png";
import imgYonseiUniversity from "figma:asset/79c99c81cfaeca24daca4db04fe201808e2879f0.png";
import imgHanaPowerOn from "figma:asset/a0a45be6cf8dad42f8f4c06be012a03a025425b8.png";
import imgMentalhealthKorea from "figma:asset/0ad58cd53534b1dbc5e679a2a4fd00d9d9c75733.png";
import imgMinistryOfHealthWelfare1 from "figma:asset/a5282daa0842db9f55e0448414706587ac617cda.png";
import img1Photoroom1 from "figma:asset/ea64946b84617340afd3b584c77960936989aded.png";
import img3Photoroom1 from "figma:asset/7c4ccb1a3b48ae4f49a10d83d02a24022cda3376.png";

function U() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="U300+">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7300] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[1.3]">U300+</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[30px] items-center pb-[20px] relative size-full">
      <div className="h-[50px] relative shrink-0 w-[123.571px]" data-name="Asan Nanum Foundation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsanNanumFoundation} />
      </div>
      <div className="h-[35px] relative shrink-0 w-[198px]" data-name="image 29">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[178.32%]" src={imgImage29} />
        </div>
      </div>
      <div className="h-[35px] relative shrink-0 w-[112px]" data-name="스크린샷 2025-10-29 15.16.28 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img202510291516281} />
      </div>
      <div className="h-[40px] relative shrink-0 w-[142.857px]" data-name="Yonsei university">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYonseiUniversity} />
      </div>
      <div className="h-[30px] relative shrink-0 w-[82.5px]" data-name="hana power on">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHanaPowerOn} />
      </div>
      <U />
      <div className="h-[40px] relative shrink-0 w-[44px]" data-name="Mentalhealth Korea">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMentalhealthKorea} />
      </div>
      <div className="h-[40px] relative shrink-0 w-[144.928px]" data-name="Ministry of Health & Welfare 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMinistryOfHealthWelfare1} />
      </div>
      <div className="h-[56px] relative shrink-0 w-[81px]" data-name="1-Photoroom 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1Photoroom1} />
      </div>
      <div className="h-[54px] relative shrink-0 w-[58px]" data-name="3-Photoroom 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-93.65%] max-w-none top-0 w-[193.65%]" src={img3Photoroom1} />
        </div>
      </div>
    </div>
  );
}