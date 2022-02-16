import Link from "next/link";

export default function Nav() {
  return (
    <div className="space-x-6 pb-1 text-lg text-gray-600">
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="/day-care-centre">Day Creche</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="#">Puppy Parties</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="#">Pack Leaders</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="#">Health & Safety</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="#">FAQ</Link>
      </span>
      <span className="inline-flex transition-all duration-200 hover:text-[#0094CB]">
        <Link href="#">How to Join</Link>
      </span>
    </div>
  );
}
