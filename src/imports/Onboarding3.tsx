import svgPaths from "./svg-97w9r5y8yx";
import imgGeminiGeneratedImageIa3Uciia3Uciia3U1 from "figma:asset/035578e69e167376821ba8d47bc3c849ce2f1d50.png";
import imgGeminiGeneratedImageA4Jj17A4Jj17A4Jj1 from "figma:asset/37d2e8131d1d2c58129c47c2aaf4e311e717c029.png";

function Time() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[30.5px] py-[13px] top-0 w-[93px]" data-name="Time">
      <p className="font-['SF_SD_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.237px]" style={{ fontFeatureSettings: "\'ss16\'" }}>
        9:41
      </p>
    </div>
  );
}

function Celluar() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Celluar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Celluar">
          <path d={svgPaths.p3b6718a0} fill="var(--fill-0, black)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function WiFi() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16px]" data-name="Wi-Fi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="Wi-Fi">
          <path clipRule="evenodd" d={svgPaths.p3c0b1680} fill="var(--fill-0, black)" fillRule="evenodd" id="Wi-Fi_2" />
        </g>
      </svg>
    </div>
  );
}

function Battery1() {
  return (
    <div className="absolute h-[11.333px] left-[0.34px] top-[0.33px] w-[24.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
        <g id="Battery">
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.5" />
          <rect height="10.3333" id="Border" opacity="0.4" rx="2.5" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[12px] relative shrink-0 w-[25px]" data-name="Battery">
      <Battery1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-start pb-px pt-[3px] relative shrink-0" data-name="Content">
      <Celluar />
      <WiFi />
      <Battery />
    </div>
  );
}

function Status() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center p-[14px] right-0 top-0 w-[95px]" data-name="Status">
      <Content />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Time />
      <Status />
    </div>
  );
}

function StatusSafeArea() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Status Safe Area">
      <Container />
    </div>
  );
}

function TopNav() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[375px]" data-name="topNav">
      <StatusSafeArea />
      <div className="bg-[#dcdcdc] h-px shrink-0 w-full" />
    </div>
  );
}

function RiMicOffLine() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[37.5px] top-1/2" data-name="ri:mic-off-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 37.5">
        <g id="ri:mic-off-line">
          <path d={svgPaths.p16dc0c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FluentCallEnd16Filled() {
  return (
    <div className="bg-[#d6d5d9] overflow-clip relative rounded-[999px] shrink-0 size-[60px]" data-name="fluent:call-end-16-filled">
      <RiMicOffLine />
    </div>
  );
}

function FluentCallEnd16Filled1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="fluent:call-end-16-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="fluent:call-end-16-filled">
          <rect fill="var(--fill-0, #F2415A)" height="80" rx="40" width="80" />
          <path d={svgPaths.p2cc3cc00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.9%_7.82%_0.78%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.4445 32.3734">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1bf44e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteVolumeMuteLine() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[37.5px] top-1/2" data-name="mingcute:volume-mute-line">
      <Group />
    </div>
  );
}

function FluentCallEnd16Filled2() {
  return (
    <div className="bg-[#d6d5d9] overflow-clip relative rounded-[999px] shrink-0 size-[60px]" data-name="fluent:call-end-16-filled">
      <MingcuteVolumeMuteLine />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[712px] w-[335px]">
      <FluentCallEnd16Filled />
      <FluentCallEnd16Filled1 />
      <FluentCallEnd16Filled2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <rect fill="var(--fill-0, white)" fillOpacity="0.3" height="32" rx="16" width="32" />
          <path d="M12 24L20 16L12 8" id="Vector" stroke="var(--stroke-0, #2A2A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[77px] relative w-[219px]">
      <div className="absolute inset-[-21.3%_-9.32%_-31.69%_-9.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259.8 117.8">
          <g filter="url(#filter0_d_10_547)" id="Group 1943242972">
            <g id="Frame 1943243097">
              <rect fill="var(--fill-0, white)" height="56" rx="28" width="219" x="20.4" y="37.4" />
              <path d={svgPaths.p2e328700} id="Vector" stroke="url(#paint0_linear_10_547)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
              <path d={svgPaths.p89e7a00} id="Vector_2" stroke="url(#paint1_linear_10_547)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
              <path d={svgPaths.p2f98b880} id="Vector_3" stroke="url(#paint2_linear_10_547)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            </g>
            <path d={svgPaths.p21641c00} fill="var(--fill-0, white)" id="Vector 4197" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="117.8" id="filter0_d_10_547" width="259.8" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10.2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_547" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_547" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_547" x1="40.4" x2="101.681" y1="65.4" y2="65.4">
              <stop stopColor="#FA5454" />
              <stop offset="1" stopColor="#FC9393" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_10_547" x1="103.4" x2="164.681" y1="65.4" y2="65.4">
              <stop stopColor="#FC9393" />
              <stop offset="1" stopColor="#FA5454" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_10_547" x1="219.4" x2="158.119" y1="65.4" y2="65.4">
              <stop stopColor="#FED5D5" />
              <stop offset="1" stopColor="#FF1717" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] relative size-full to-[#fed5d5]" data-name="onboarding3">
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[812px] top-0" data-name="Gemini_Generated_Image_ia3uciia3uciia3u 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageIa3Uciia3Uciia3U1} />
      </div>
      <TopNav />
      <div className="absolute h-[164px] left-[calc(50%+43.5px)] rounded-[17px] top-[529px] w-[128px]" data-name="Gemini_Generated_Image_a4jj17a4jj17a4jj 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[17px]">
          <img alt="" className="absolute h-[191.4%] left-[-70.1%] max-w-none top-[-12.71%] w-[244.98%]" src={imgGeminiGeneratedImageA4Jj17A4Jj17A4Jj1} />
        </div>
      </div>
      <Frame />
      <div className="absolute flex items-center justify-center left-[17px] size-[32px] top-[59px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Icon />
        </div>
      </div>
      <div className="absolute flex h-[77px] items-center justify-center left-[calc(25%+48.25px)] top-[123px] w-[219px]">
        <div className="-scale-y-100 flex-none">
          <Group1 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Pretendard:SemiBold',sans-serif] leading-[1.6] left-1/2 not-italic text-[#171717] text-[16px] text-center top-[62px]">Julia</p>
    </div>
  );
}