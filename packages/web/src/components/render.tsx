"use client";

import * as lucide from "react-icons/lu";
import { type IconState } from "@/components/store";

export default function Render(props: IconState) {
  const CurrentIcon = lucide[props.icon as keyof typeof lucide];

  return (
    <div
      id="render"
      className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: props.bgPadding,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: props.bgColor,
          borderRadius: `${props.bgRadius}%`,
        }}
      >
        <CurrentIcon
          style={{
            width: props.iconSize,
            height: props.iconSize,
            stroke: props.iconBorderColor,
            fill: props.iconFillColor,
            strokeWidth: props.iconBorder,
            color: props.iconBorderColor,
            transform: `rotate(${props.iconRotate}deg) translate(${props.iconOffsetX}px, ${props.iconOffsetY}px)`,
          }}
        />
      </div>
    </div>
  );
}
