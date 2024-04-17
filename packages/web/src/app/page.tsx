"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Control from "@/components/control";
import Render from "@/components/render";
import Download from "@/components/download";
import Presets, { Preset } from "@/components/presets";
import useStore from "@/components/store";

export default function Page() {
  const state = useStore();

  return (
    <main className="font-sans">
      <div className="dashed-grid-paper h-dvh lg:overflow-hidden">
        <div className="bg-background flex items-center justify-between border-b px-4 py-2">
          <span className="flex items-center justify-center gap-2">
            <Preset
              onClick={() => state.reset()}
              href="logo.png"
              tooltip="Use our logo!"
            />
            <div className="flex flex-col gap-0">
              <h1 className="font-display text-xl font-bold">Instant Icon</h1>
              <h2 className="hidden text-balance text-xs leading-3 sm:block">
                Quickly and easily create an icon for your next project
              </h2>
            </div>
          </span>
          <Presets />
          <Download />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          <div className="bg-background h-[50vh] w-full overflow-y-scroll border-b p-4 lg:h-[100vh] lg:w-[400px] lg:border-r">
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
