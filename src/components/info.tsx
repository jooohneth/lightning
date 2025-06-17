import ScrambledText from "@/components/ui/scramble-text";
import InfoCard from "@/components/infoCard";
import { data, type Data } from "@/lib/content";

const Info = () => {
  return (
    <div className="flex flex-col gap-10 text-[#ffffe4] uppercase">
      <div className="flex flex-row justify-center">
        <ScrambledText
          className="text-9xl font-semibold uppercase"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars={".: "}
        >
          Why?
        </ScrambledText>
      </div>

      <div className="flex flex-row gap-20 pt-20 w-[100%] mx-auto">
        {data.map((item: Data, i: number) => (
          <InfoCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Info;
