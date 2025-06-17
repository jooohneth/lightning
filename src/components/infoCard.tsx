import Image from "next/image";

import { type Data } from "@/lib/content";

const InfoCard = ({ heading, title, description, img }: Data) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="relative">
        <Image
          className="rounded-2xl"
          src={img}
          alt={title}
          width={400}
          height={400}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[80%] w-auto">
          <div className="text-center uppercase text-3xl md:text-4xl lg:text-5xl font-semibold bg-black/70 p-4 rounded-2xl whitespace-nowrap">
            {heading}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-[400px]">
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
