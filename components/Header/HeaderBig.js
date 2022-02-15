import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import SocialButtons from "./SocialButtons";

export default function HeaderBig() {
  return (
    <div className="flex w-full items-end justify-between pt-4 md:px-6 lg:px-20 xl:px-40">
      <Link href="/">
        <Image
          className="cursor-pointer object-contain"
          src="/images/colchester-canine-creche-logo.png"
          width={250}
          height={185}
        />
      </Link>
      <div className="">
        <div className="mb-10 flex justify-end">
          <div className="flex flex-col items-end -space-y-1">
            <span className="text-gray-600">Telephone: 01206 768222</span>
            <span className="text-gray-600">
              <a
                href="info@colchestercaninecreche.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@colchestercaninecreche.co.uk
              </a>
            </span>
            <div className="pt-6">
              <SocialButtons />
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
}
