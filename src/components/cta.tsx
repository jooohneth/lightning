import ScrambledText from "@/components/ui/scramble-text";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="flex flex-col text-[#ffffe4] uppercase">
      <Image
        src="/lightning.png"
        alt="Lightning Grants"
        width={250}
        height={250}
        className="mx-auto"
      />

      <ScrambledText
        className="text-9xl font-semibold uppercase pt-5"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".: "}
      >
        Apply!
      </ScrambledText>

      <div className="flex justify-center pt-30">
        <Button className="font-bold text-2xl bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-white/40 transition-all duration-500 shadow-2xl shadow-black/20">
          Get Funded ⚡
        </Button>
      </div>
    </div>
  );
};

export default CTA;
