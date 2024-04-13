"use client";

import ColorPicker from "react-best-gradient-color-picker";
import { Slider } from "@/components/ui/slider";
import Label from "@/components/label";
import ControlIcon from "@/components/control-icon";
import useStore from "@/components/store";

export default function ControlForeground() {
  const state = useStore();

  return (
    <div>
      <Label name="Icon" value={state.iconName} />
      <ControlIcon />

      <Label
        name="Size"
        value={state.iconSize}
        reset={() => state.reset("iconSize")}
        symbol="px"
      />
      <Slider
        value={[state.iconSize]}
        max={600}
        step={1}
        onValueChange={(v) => state.setIconSize(v[0])}
      />

      <Label
        name="Rotation"
        value={state.iconRotate}
        reset={() => state.reset("iconRotate")}
        symbol="°"
      />
      <Slider
        value={[state.iconRotate]}
        max={180}
        min={-180}
        step={1}
        onValueChange={(v) => state.setIconRotate(v[0])}
      />

      <Label
        name="Border Width"
        value={state.iconBorder}
        reset={() => state.reset("iconBorder")}
        symbol="px"
      />
      <Slider
        value={[state.iconBorder]}
        max={4}
        min={0.1}
        step={0.1}
        onValueChange={(v) => state.setIconBorder(v[0])}
      />

      <Label
        name="Offset X"
        value={state.iconOffsetX}
        reset={() => state.reset("iconOffsetX")}
        symbol="px"
      />
      <Slider
        value={[state.iconOffsetX]}
        max={100}
        min={-100}
        step={1}
        onValueChange={(v) => state.setIconOffsetX(v[0])}
      />

      <Label
        name="Offset Y"
        value={state.iconOffsetY}
        reset={() => state.reset("iconOffsetY")}
        symbol="px"
      />
      <Slider
        value={[state.iconOffsetY]}
        max={100}
        min={-100}
        step={1}
        onValueChange={(v) => state.setIconOffsetY(v[0])}
      />

      <Label
        name="Border Color"
        value={state.iconBorderColor}
        reset={() => state.reset("iconBorderColor")}
      />
      <ColorPicker
        value={state.iconBorderColor}
        onChange={state.setIconBorderColor}
        width={280}
        height={80}
        hideControls
        hidePresets
      />

      <Label
        name="Fill Color"
        value={state.iconFillColor}
        reset={() => state.reset("iconFillColor")}
      />
      <ColorPicker
        value={state.iconFillColor}
        onChange={state.setIconFillColor}
        width={280}
        height={80}
        hideControls
        hidePresets
      />
    </div>
  );
}
