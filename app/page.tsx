import Image from "next/image";
 

export default function Home() {
  return (
    <div id="contents" className="flex-1 flex justify-center items-center w-full px-4">
      <div id="landing_image" className="w-full max-w-xl flex flex-col items-center">
        <Image src="/images/spiritnewlogo.png.png" alt="MASK" id="landing_mask" className="h-96 object-contain" width={384} height={384} priority />

        <h2 className="text-[#e9ecef] cursor-default text-2xl my-5 font-bold">
          team 25323
          <span className="text-[#adb5bd] font-normal mx-2">|</span>
          team 25324
        </h2>

        <Image src="/images/logo_spirit_text.png" alt="SPIRIT" id="landing_text" className="h-20 object-contain" width={320} height={80} priority />

        <div id="slogan" className="group relative mt-5 select-none h-20 w-full text-center">
          <h1 id="kor" className="absolute w-full text-4xl leading-10 font-light text-white drop-shadow-md origin-top transition-transform duration-100 ease-in-out scale-y-100 group-hover:scale-y-0">
            <span className="font-normal">혼</span>을 담은 로봇
          </h1>
          <h1 id="eng" className="absolute w-full text-4xl leading-10 font-light text-white drop-shadow-md origin-bottom transition-transform duration-100 ease-in-out scale-y-0 group-hover:scale-y-100">
            A robot with a <span className="font-normal">spirit</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
