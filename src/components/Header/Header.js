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
    `,
]);

export default function Header() {
  return (
    <div className="mx-20 flex">
      <div className="flex mt-10 w-full justify-between items-center">
        <button
          type="button"
          tw="text-red-700 hover:(text-blue-600 underline) cursor-pointer"
        >
          This is Header
        </button>
        <ConditionButton isPurple>Contact</ConditionButton>
        <span>Log in</span>
      </div>
    </div>
  );
}
