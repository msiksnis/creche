import tw from "twin.macro";
import "styled-components/macro";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const IconBg = tw.div`
flex justify-center items-center
h-9
w-9
rounded-full
shadow
bg-[#7BC140]
hover:scale-105
transition-all duration-300
cursor-pointer
`;

export default function SocialButtons() {
  return (
    <div className="flex space-x-2">
      <IconBg className="text-xl">
        <FaInstagram />
      </IconBg>
      <IconBg className="">
        <FaFacebookF />
      </IconBg>
      <IconBg className="text-xl">
        <FaYoutube />
      </IconBg>
    </div>
  );
}
