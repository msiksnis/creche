import Image from "next/image";
import tw from "twin.macro";
import "styled-components/macro";

const PinkButton = tw.button`
uppercase
py-2
px-4
rounded-lg
bg-pink-500
hover:bg-pink-400
border-2 border-transparent
text-white
mr-4
`;

export default function Landing() {
  return (
    <div tw="bg-white flex mx-40 z-20 items-center overflow-hidden">
      <div tw="container flex justify-between py-16">
        <div tw="sm:w-2/3 lg:w-2/5 flex flex-col z-20">
          <span tw="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 tw="uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Be on
            <span tw="text-5xl sm:text-7xl">Time</span>
          </h1>
          <p tw="text-sm sm:text-base text-gray-700  dark:text-white">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div tw="flex mt-8">
            <PinkButton href="#">Get started</PinkButton>
            <a
              href="#"
              tw="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white"
            >
              Read more
            </a>
          </div>
        </div>
        <div tw="">
          <Image
            src="/images/iWatch.png"
            width="400"
            height="500"
            alt="be on time"
            tw="max-w-xs md:max-w-sm m-auto"
          />
        </div>
      </div>
    </div>
  );
}
