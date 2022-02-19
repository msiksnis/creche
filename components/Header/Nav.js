import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <div className="space-x-6 pb-1 text-lg text-gray-600">
      <Link href="/day-care-centre">
        <a
          className={`inline-flex transition-all duration-200 hover:text-[#0094CB] ${
            router.pathname === "/day-care-centre" ? "text-[#0094CB]" : ""
          }`}
        >
          Day Creche
        </a>
      </Link>
      <Link href="/puppy-parties">
        <a
          className={`inline-flex transition-all duration-200 hover:text-[#0094CB] ${
            router.pathname === "/puppy-parties" ? "text-[#0094CB]" : ""
          }`}
        >
          Puppy Parties
        </a>
      </Link>
      <Link href="/pack-leaders">
        <a
          className={`inline-flex transition-all duration-200 hover:text-[#0094CB] ${
            router.pathname === "/pack-leaders" ? "text-[#0094CB]" : ""
          }`}
        >
          Pack Leaders
        </a>
      </Link>
      <Link href="/health-safety">
        <a
          className={`inline-flex transition-all duration-200 hover:text-[#0094CB] ${
            router.pathname === "/health-safety" ? "text-[#0094CB]" : ""
          }`}
        >
          Health & Safety
        </a>
      </Link>
      <Link href="/faq">
        <a
          className={`inline-flex transition-all duration-200 hover:text-[#0094CB] ${
            router.pathname === "/faq" ? "text-[#0094CB]" : ""
          }`}
        >
          FAQ
        </a>
      </Link>
      <Link href="/how-to-join">
        <a
          className={`inline-flex transition-all duration-200 hover:text-[#0094CB] ${
            router.pathname === "/how-to-join" ? "text-[#0094CB]" : ""
          }`}
        >
          How to Join
        </a>
      </Link>
    </div>
  );
}
