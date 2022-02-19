import { motion } from "framer-motion";
import tw from "twin.macro";
import "styled-components/macro";
import Link from "next/link";
import SocialButtons from "../SocialButtons";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <Nav>
      <div className="mt-6 space-y-3 text-gray-700">
        <Link href="day-care-centre">
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
            <Anker
              className={`${
                router.pathname === "/day-care-centre"
                  ? "pl-2 text-[#0094CB]"
                  : ""
              }`}
            >
              Day Creche
            </Anker>
          </NavLink>
        </Link>
        <Link href="/puppy-parties">
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
            <Anker
              className={`${
                router.pathname === "/puppy-parties"
                  ? "pl-2 text-[#0094CB]"
                  : ""
              }`}
            >
              Puppy Parties
            </Anker>
          </NavLink>
        </Link>
        <Link href="/pack-leaders">
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
            <Anker
              className={`${
                router.pathname === "/pack-leaders" ? "pl-2 text-[#0094CB]" : ""
              }`}
            >
              Pack Leaders
            </Anker>
          </NavLink>
        </Link>
        <Link href="/health-safety">
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
            <Anker
              className={`${
                router.pathname === "/health-safety"
                  ? "pl-2 text-[#0094CB]"
                  : ""
              }`}
            >
              Health & Safety
            </Anker>
          </NavLink>
        </Link>
        <Link href="/faq">
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
            <Anker
              className={`${
                router.pathname === "/faq" ? "pl-2 text-[#0094CB]" : ""
              }`}
            >
              FAQ
            </Anker>
          </NavLink>
        </Link>
        <Link href="/how-to-join">
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
            <Anker
              className={`${
                router.pathname === "/how-to-join" ? "pl-2 text-[#0094CB]" : ""
              }`}
            >
              How to Join
            </Anker>
          </NavLink>
        </Link>
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
