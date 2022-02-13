import { useEffect, useState } from "react";
import HeaderBig from "./HeaderBig";
import HeaderSmall from "./HeaderSmall";

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
    <>
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
    </>
  );
}
