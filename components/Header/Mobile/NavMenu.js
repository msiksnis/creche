import { motion } from "framer-motion";
import tw from "twin.macro";
import "styled-components/macro";
import Link from "next/link";
import SocialButtons from "../SocialButtons";

const Nav = tw.ul`
grid
grid-rows-2
`;

const NavLink = tw(motion.li)`
flex
items-center
text-gray-600
tracking-wide
`;

const Anker = tw(motion.a)`
text-xl
border-b border-gray-200
w-full
pb-2
transition-all duration-200 ease-in-out
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const variantsSecond = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

export function NavMenu({ toggle, isOpen }) {
  return (
    <Nav>
      <div className="mt-6 space-y-3 text-gray-700">
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.25, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
          onClick={toggle}
        >
          <Link href="#">
            <Anker>Day Creche</Anker>
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.2, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
          onClick={toggle}
        >
          <Link href="#">
            <Anker>Puppy Parties</Anker>
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
          onClick={toggle}
        >
          <Link href="#">
            <Anker>Pack Leaders</Anker>
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.35, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
          onClick={toggle}
        >
          <Link href="#">
            <Anker>Health & Safety</Anker>
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
          onClick={toggle}
        >
          <Link href="#">
            <Anker>FAQ</Anker>
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.35, duration: 0.05 },
            },
          }}
          onClick={toggle}
        >
          <Link href="#">
            <Anker>How to Join</Anker>
          </Link>
        </NavLink>
      </div>
      <div className="flex items-end justify-center">
        <motion.button
          className=""
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variantsSecond.show,
              transition: { delay: 0.7, duration: 0.7 },
            },
            hide: {
              ...variantsSecond.hide,
              transition: { delay: 0.45, duration: 0.05 },
            },
          }}
          onClick={toggle}
        >
          <SocialButtons />
        </motion.button>
      </div>
    </Nav>
  );
}
