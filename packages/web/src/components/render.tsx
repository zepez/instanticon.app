"use client";

import * as lucide from "react-icons/lu";
import { type IconState } from "@/components/store";

export default function Render(props: IconState) {
  const CurrentIcon = lucide[props.icon as keyof typeof lucide];

  return (
    <div
      id="render"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        width: props.bgSize,
        height: props.bgSize,
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
          backgroundColor: "#000",
          borderRadius: `${props.bgRadius}%`,
        }}
      >
        <CurrentIcon
          style={{
            width: props.iconSize,
            height: props.iconSize,
            stroke: "#fff",
            strokeWidth: props.iconBorder,
            color: "#fff",
            transform: `rotate(${props.iconRotate}deg)`,
          }}
        />
      </div>
    </div>
  );
}
