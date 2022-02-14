import Link from "next/link";

export default function WelcomeSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-4 md:px-0">
        <h1 className="mt-10 text-center text-2xl text-[#7BC140] md:text-3xl">
          Welcome to Colchester Canine Creche
        </h1>
        <h2 className="mt-4 text-center font-medium md:text-lg">
          The home of Luxury Doggie Day Care.
        </h2>
        <div className="mt-10 mb-10 space-y-2 text-[17px] font-light leading-6 tracking-wide text-gray-600 md:mt-14 lg:w-4/5">
          <p>
            Colchester Canine Creche offer the complete package of canine care,
            this type of facility is innovative, with service levels at an
            inspirational level and dedicated, fully trained staff.
          </p>
          <p>
            We believe that this method of daycare is the future for your dogs.
          </p>
          <p>
            Boredom and excess energy are two common causes of behavioural
            problems in dogs, Colchester Canine Creche provides a safe and fun
            environment for your dog to play, socialise, exercise and have forty
            winks with other friendly dogs, helping to prevent destructive and
            anxious behaviour at home.
          </p>
          <p>
            We have a bespoke facility designed to be cage free (unkennelled)
            with only your dog in mind. Everything is here, we do not take your
            dog off site or travel to another location, your dogs are safe and
            secure at all times.
          </p>
        </div>
      </div>
      <div className="mb-10 flex flex-col space-y-4 md:mb-14 md:flex-row md:space-y-0 md:space-x-10">
        <iframe
          width="354"
          height="200"
          src="https://www.youtube.com/embed/07MfMBdZEtI"
          title="Creche Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <iframe
          width="354"
          height="200"
          src="https://www.youtube.com/embed/MPW5GcJsq04"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <button className="rounded bg-[#7BC140] px-10 pt-3 pb-2 font-medium uppercase tracking-wide text-blue-600 shadow-lg transition-all duration-300 hover:bg-[#9bdb67]">
        <Link href="#">More bout our pawlosophy</Link>
      </button>
    </div>
  );
}
