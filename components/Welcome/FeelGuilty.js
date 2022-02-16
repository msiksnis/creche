import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SecondaryButton, Text, Title } from "../StyledTags";

export default function FeelGuilty() {
  return (
    <div className="mb-20 mt-10 flex flex-col items-center lg:mt-16">
      <div className="flex flex-col items-center px-4 md:px-6 lg:px-20 xl:px-40">
        <Title>
          Do you ever feel guilty about leaving your dog at home alone?
          <br />
          Now you don't have to!
        </Title>
        <Text>
          Our spacious custom-designed facility provides fun, exercise and
          social interaction, all essential to a dog's well-being. Simply drop
          your pooch off for a few hours, half day, or the entire working day
          and we will entertain, play, fuss and make your dogs day! You will
          collect a very tired, happy and contented dog that cannot wait to
          visit next time!
        </Text>
      </div>
      <div className="flex min-h-[530px] w-full flex-col justify-around bg-[#4FC5FF] p-4 md:flex-row md:p-10">
        <div className="text-[17px] font-light leading-6 tracking-wide text-gray-800 md:pr-2">
          <h1 className="text-center text-xl font-medium text-gray-700 md:mt-2 md:pl-10 md:text-left md:text-2xl">
            Need Day Care For Your Dog That You Can Count On?
          </h1>
          <p className="mt-4 md:mt-10">
            Do you ever feel guilty about leaving your dog at home alone? Now
            you don't have to.
          </p>
          <p className="">
            We're a trusted day care provider with a community of dogs and
            owners who repy on us.
          </p>
          <p className="mt-4 font-medium">
            Please call if you want to know more - 01206 768222.
          </p>
          <div className="mb-10">
            <h1 className="mt-6 text-center text-xl font-medium text-gray-700 md:mt-10 md:pl-10 md:text-left md:text-2xl">
              Why Choose Us?
            </h1>
            <div className="mt-4 flex space-x-4">
              <div className="text-2xl text-gray-700">
                <IoMdCheckmarkCircleOutline />
              </div>
              <h4 className="">Fully licensed and inspected</h4>
            </div>
            <div className="mt-4 flex space-x-4">
              <div className="text-2xl text-gray-700">
                <IoMdCheckmarkCircleOutline />
              </div>
              <h4 className="">Caring, friendly and professional</h4>
            </div>
            <div className="mt-4 flex space-x-4">
              <div className="text-2xl text-gray-700">
                <IoMdCheckmarkCircleOutline />
              </div>
              <h4 className="">
                Highly recommended - with service levels to inspire
              </h4>
            </div>
            <div className="mt-4 flex space-x-4">
              <div className="text-2xl text-gray-700">
                <IoMdCheckmarkCircleOutline />
              </div>
              <h4 className="">Countless testimonials from happy hounds</h4>
            </div>
          </div>
          <div className="flex justify-around space-x-0 pb-10 md:justify-center md:space-x-10">
            <SecondaryButton className="py-2 px-4 md:px-10">
              <Link href="#">
                <a>See our facilities</a>
              </Link>
            </SecondaryButton>
            <SecondaryButton className="py-2 px-4 md:px-10">
              <Link href="#">
                <a>How to join us</a>
              </Link>
            </SecondaryButton>
          </div>
        </div>
        <Image
          src="/images/Day-care-promo-768x768.jpg"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>
    </div>
  );
}
