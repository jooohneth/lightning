import ScrambledText from "@/components/ui/scramble-text";
import Grid from "./bento-grid";

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

      <Grid />
    </div>
  );
};

export default Info;
