import ScrambledText from "@/components/ui/scramble-text";
import InfoCard from "@/components/infoCard";
import { data, type Data } from "@/lib/content";

const Info = () => {
  return (
    <div className="flex flex-col gap-10 text-[#ffffe4] uppercase">
      <ScrambledText
        className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold uppercase text-center"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".: "}
      >
        Why?
      </ScrambledText>

      <div className="flex flex-col md:flex-row gap-20 pt-5 md:pt-20 w-[100%] mx-auto items-start">
        {data.map((item: Data, i: number) => (
          <InfoCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Info;
