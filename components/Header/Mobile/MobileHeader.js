import tw from "twin.macro";
import "styled-components/macro";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

export default function MobileHeader() {
  return (
    <div className="fixed top-0 z-50 flex w-full flex-col items-center justify-between overflow-hidden bg-white px-4 shadow">
      <div className="flex w-full items-center justify-between py-2">
        <div className="cursor-pointer">
          <Link href="/">
            <a>
              <Image
                className="object-contain"
                src="/images/colchester-canine-creche-logo-small.png"
                width={130}
                height={50}
              />
            </a>
          </Link>
        </div>
        <div className="ml-6">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
