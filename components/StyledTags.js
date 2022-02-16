import tw, { styled } from "twin.macro";
import "styled-components/macro";

export const Padding = tw.div`
px-4
md:px-6
lg:px-20
xl:px-40
`;

export const Title = tw.h1`
text-center
text-2xl
text-[#7BC140]
md:text-3xl
`;

export const PrimaryButton = tw.button`
rounded-md
bg-[#4FC5FF]
font-medium
uppercase
tracking-wide
text-gray-700
shadow-md
transition-all
duration-300
hover:bg-[#80d4ff]
`;

export const SecondaryButton = tw.button`
rounded-md
bg-[#7BC140]
text-sm
font-medium
uppercase
tracking-wide
shadow-md
transition-all
duration-200
hover:bg-[#9bdb67]
`;

export const Text = tw.h2`
mt-10
mb-10
space-y-2
text-[17px]
font-light
leading-6
tracking-wide
text-gray-600
md:mt-14
xl:w-4/5
`;
