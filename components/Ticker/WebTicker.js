import Image from "next/image";
import Ticker from "react-ticker";
import { tickerImages } from "../../data/ticker-images";

export default function WebTicker() {
  return (
    <div className="mt-8 max-w-screen-2xl md:px-6 lg:px-20 xl:px-40">
      <Ticker speed={5} offset={0}>
        {({ index }) => (
          <div className="flex w-full">
            {tickerImages.map((image) => (
              <div key={image.id} className="flex p-2">
                <Image
                  className="rounded object-cover"
                  src={image.photo.image.url}
                  width={183}
                  height={200}
                  layout="fixed"
                />
              </div>
            ))}
          </div>
        )}
      </Ticker>
    </div>
  );
}
