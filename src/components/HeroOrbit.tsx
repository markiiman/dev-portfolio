import StarIcon from "@/assets/icons/star.svg";
import { PropsWithChildren } from "react";

type heroOrbitProps = {
  size: number;
  rotation: number;
}

const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<heroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="inline-flex" style={{
          transform: `rotate(${rotation * -1}deg)`,
        }}>{children}</div>
      </div>
    </div>
  );
};

export default HeroOrbit;
