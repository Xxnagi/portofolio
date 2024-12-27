import { useState } from "react";
import Curve from "../../components/Layout/Curve";
import AnimatedText from "@/components/AnimatedText";

const Index = () => {
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

  return (
    <>
      <Curve>
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <AnimatedText
            text="Mustafa Ali"
            className="text-7xl font-bold"
            onComplete={() => setFirstAnimationComplete(true)}
          />
          {firstAnimationComplete && (
            <AnimatedText
              text={[
                "This is written on",
                "a typing machine. Tick tick",
                "tick tack tack...",
              ]}
              className="text-2xl"
            />
          )}
        </div>
      </Curve>
    </>
  );
};

export default Index;
