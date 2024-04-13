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
      <div className="dashed-grid-paper h-dvh overflow-hidden">
        <div className="bg-background flex items-center justify-between border-b px-4 py-2">
          <span className="flex items-center justify-center gap-2">
            <Logo />
            <div className="flex flex-col gap-0">
              <h1 className="font-display text-xl font-bold">Instant Icon</h1>
              <h2 className="text-balance text-xs leading-3">
                Quickly and easily create an icon for your next project
              </h2>
            </div>
          </span>
          <Presets />
          <Download />
        </div>
        <div className="flex h-full">
          <div className="bg-background h-[100vh] w-[400px] overflow-y-scroll border-r p-4">
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
