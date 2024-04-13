"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Control from "@/components/control";
import Render from "@/components/render";
import Download from "@/components/download";
import Presets, { Logo } from "@/components/presets";
import useStore from "@/components/store";

export default function Page() {
  const state = useStore();

  return (
    <main className="font-sans">
      <div className="dashed-grid-paper h-dvh overflow-y-hidden">
        <div className="bg-background flex items-center justify-between border-b px-4 py-2">
          <span className="flex items-center justify-center gap-2">
            <Logo />
            <h1 className="font-display text-2xl font-bold">Instant Icon</h1>
          </span>
          <Presets />
          <Download />
        </div>
        <div className="flex h-full">
          <div className="bg-background w-[300px] border-r p-4">
            <Control />
          </div>
          <div className="flex w-full items-center justify-center">
            <Tooltip>
              <TooltipTrigger
                className="bg-muted/20 cursor-default border-4 border-dashed"
                tabIndex={-1}
              >
                <Render {...state} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Downloadable Area</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </main>
  );
}
