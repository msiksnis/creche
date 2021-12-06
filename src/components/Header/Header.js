import tw, { styled } from "twin.macro";
import "styled-components/macro";

const ConditionButton = styled.button(({ isPurple }) => [
  isPurple
    ? tw`bg-purple-500 hover:bg-purple-800`
    : tw`bg-green-300 hover:bg-green-700`,
  tw`
    text-white
    font-bold
    py-2
    px-10
    border
    border-black
    rounded
    shadow-md
    `,
]);

const GradientButton = tw.button`
bg-gradient-to-r
from-yellow-200
to-yellow-400
text-yellow-900
px-10
py-2
font-semibold
rounded
hover:from-yellow-300 
hover:to-yellow-100
border-2 border-yellow-400/25 bg-origin-border
rotate-3
shadow-md
`;

export default function Header() {
  return (
    <div tw="bg-black h-32">
      <div className="mx-20 flex">
        <div className="flex mt-10 w-full justify-between items-center">
          <ConditionButton isPurple>Contact</ConditionButton>
          <div className="relative group">
            <div
              tw="absolute w-96 h-14 -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg
              blur-lg opacity-75 group-hover:opacity-100  transition duration-1000 group-hover:duration-200
              animate-tilt"
            />
            <button
              tw="relative w-96 h-14 rounded-lg leading-none flex items-center justify-center divide-x divide-gray-600 bg-black"
              type="button"
            >
              <span tw="pr-6 text-gray-100">This Is a Header</span>
              <span tw="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-1000 group-hover:duration-200">
                Modifie Me
              </span>
            </button>
          </div>
          <GradientButton>Log in</GradientButton>
        </div>
      </div>
    </div>
  );
}
