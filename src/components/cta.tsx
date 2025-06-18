import ScrambledText from "@/components/ui/scramble-text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const CTA = () => {
  return (
    <div className="flex flex-col text-[#ffffe4] uppercase justify-center items-center">
      <Image
        src="/lightning.png"
        alt="Lightning Grants"
        width={300}
        height={300}
        className="mx-auto"
      />

      <div className="flex justify-center pt-25">
        <Button
          size="lg"
          variant="outline"
          className="font-semibold text-3xl py-8 px-16 bg-white/20 border-none rounded-2xl flex flex-row items-center gap-4"
        >
          <span>Apply now</span>
          <Zap className="!w-8 !h-8 rotate-0 flex-shrink-0" />
        </Button>
      </div>

      <ScrambledText
        className="uppercase mt-5 font-medium"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".: "}
      >
        Takes less than 10min.
      </ScrambledText>
    </div>
  );
};

export default CTA;
