import Link from "next/link";

export default function Nav() {
  return (
    <div className="space-x-6 pb-1 text-lg text-gray-600">
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="/day-care-centre">Day Creche</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="/puppy-parties">Puppy Parties</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="/pack-leaders">Pack Leaders</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="/health-safety">Health & Safety</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="/faq">FAQ</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="/how-to-join">How to Join</Link>
      </span>
    </div>
  );
}
