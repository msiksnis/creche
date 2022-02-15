import { infoSectionData } from "./infoSectionData";
import InfoSection from "./InfoSection";

export default function Info() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 px-4 pb-32 md:grid-cols-2 md:gap-20 md:px-6 lg:px-20 xl:flex xl:justify-between xl:px-40">
        {infoSectionData.map((data) => (
          <InfoSection key={data.title} data={data} />
        ))}
      </div>
    </div>
  );
}
