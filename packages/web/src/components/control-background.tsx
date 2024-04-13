"use client";

import { Slider } from "@/components/ui/slider";
import Label from "@/components/label";
import useStore from "@/components/store";

export default function ControlBackground() {
  const state = useStore();

  return (
    <div>
      <Label name="Radius" value={state.bgRadius * 2} symbol="%" />
      <Slider
        value={[state.bgRadius]}
        max={50}
        step={1}
        onValueChange={(v) => state.setBgRadius(v[0])}
      />

      <Label name="Padding" value={state.bgPadding} symbol="px" />
      <Slider
        defaultValue={[state.bgPadding]}
        max={100}
        step={1}
        onValueChange={(v) => state.setBgPadding(v[0])}
      />
    </div>
  );
}
