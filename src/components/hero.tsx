import ScrambledText from "@/components/ui/scramble-text";

const Hero = () => {
  return (
    <div className="absolute bottom-0 left-0 p-5 md:p-10">
      <div className="flex flex-col gap-5 md:gap-2 uppercase pb-10 md:pb-20">
        <div className="flex flex-col md:flex-row md:gap-15 whitespace-nowrap">
          <ScrambledText
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold uppercase whitespace-nowrap"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".: "}
          >
            Lightning
          </ScrambledText>
          <ScrambledText
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold uppercase whitespace-nowrap"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".: "}
          >
            Grants
          </ScrambledText>
        </div>

        <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase md:p-2 whitespace-nowrap">
          First to Back the First to Build.
        </div>
      </div>
    </div>
  );
};

export default Hero;
