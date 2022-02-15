import Link from "next/link";
import SocialButtons from "../Header/SocialButtons";

export default function Footer() {
  return (
    <div className="flex flex-col space-y-6 bg-gray-100 py-10 px-4 md:px-6 lg:flex-row lg:space-y-0 lg:space-x-20 lg:px-20 xl:space-x-40 xl:px-40">
      <div className="flex flex-col space-y-2 text-gray-600">
        <p className="">License Number 095330 </p>
        <p className="">
          Copyright 2022 Canine Creche UK | All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col space-y-2 text-gray-600">
        <Link href="#">Website Terms & Conditions</Link>
        <Link href="#">Privacy Policy</Link>
      </div>
      <div className="flex items-end">
        <SocialButtons />
      </div>
    </div>
  );
}
