"use client";

import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Label from "@/components/label";
import ControlIcon from "@/components/control-icon";
import useStore from "@/components/store";

export default function ControlForeground() {
  const state = useStore();

  return (
    <div>
      <Label name="Icon" value={state.iconName} />
      <Tooltip>
        <TooltipTrigger className="w-full" tabIndex={-1}>
          <ControlIcon />
        </TooltipTrigger>
        <TooltipContent>
          <p>Select a different icon</p>
        </TooltipContent>
      </Tooltip>

      <Label name="Size" value={state.iconSize} symbol="px" />
      <Slider
        defaultValue={[state.iconSize]}
        max={600}
        step={1}
        onValueChange={(v) => state.setIconSize(v[0])}
      />

      <Label name="Rotation" value={state.iconRotate} symbol="°" />
      <Slider
        defaultValue={[state.iconRotate]}
        max={180}
        min={-180}
        step={1}
        onValueChange={(v) => state.setIconRotate(v[0])}
      />

      <Label name="Border Width" value={state.iconBorder} symbol="px" />
      <Slider
        defaultValue={[state.iconBorder]}
        max={4}
        min={0.1}
        step={0.1}
        onValueChange={(v) => state.setIconBorder(v[0])}
      />
    </div>
  );
}
