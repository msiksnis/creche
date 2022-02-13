import { useEffect, useState } from "react";
import HeaderBig from "./HeaderBig";
import HeaderSmall from "./HeaderSmall";
import MobileHeader from "./Mobile/MobileHeader";

export default function Header() {
  const [headerSize, setHeaderSize] = useState(false);

  const switchHeader = () => {
    if (window.scrollY >= 175) {
      setHeaderSize(true);
    } else {
      setHeaderSize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", switchHeader);
    return () => window.removeEventListener("scroll", switchHeader);
  }, [switchHeader]);

  return (
    <header>
      <span className="md:hidden">
        <MobileHeader />
      </span>
      <span className="hidden md:inline">
        {headerSize ? (
          <div className="">
            <div className="opacity-0">
              <HeaderBig />
            </div>
            <HeaderSmall />
          </div>
        ) : (
          <HeaderBig />
        )}
      </span>
    </header>
  );
}
