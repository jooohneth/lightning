import ScrambledText from "@/components/ui/scramble-text";

const Hero = () => {
  return (
    <div className="absolute bottom-0 left-0 p-10">
      <div className="flex flex-col gap-2 uppercase pb-20">
        <div className="flex flex-row gap-15">
          <ScrambledText
            className="text-9xl font-semibold uppercase"
            radius={100}
            duration={1.2}
            speed={0.5}
            // scrambleChars={".: "}
            scrambleChars={".: "}
          >
            Lightning
          </ScrambledText>
          <ScrambledText
            className="text-9xl font-semibold uppercase"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".: "}
          >
            Grants
          </ScrambledText>
        </div>

        <div className="text-4xl font-medium uppercase p-2">
          First to Back the First to Build.
        </div>
      </div>
    </div>
  );
};

export default Hero;
