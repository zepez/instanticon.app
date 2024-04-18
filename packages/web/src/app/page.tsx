"use client";

import Link from "next/link";
import { LuGithub } from "react-icons/lu";
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
    <main className="flex h-full min-h-dvh flex-col font-sans lg:overflow-hidden">
      <div className="bg-background flex items-center justify-between border-b px-4 py-2">
        <span className="flex items-center justify-center gap-2">
          <Preset
            onClick={() => state.reset()}
            href="logo.png"
            tooltip="Use our logo!"
            alt="Instant Icon logo"
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

      <div className="bg-background flex flex-grow flex-col gap-8 lg:flex-row lg:gap-0">
        <div className="flex h-[50vh] w-full flex-col overflow-y-scroll border-b p-4 lg:h-auto lg:w-[400px] lg:border-r">
          <Control />
          <footer className="bg-muted flex items-center justify-between p-4">
            <Link
              href="https://github.com/zepez/instanticon.app"
              target="_blank"
              className="bg-muted inline-block w-auto rounded-full text-xl font-bold"
            >
              <LuGithub />
            </Link>
            <Link href="https://zepez.dev" target="_blank" className="text-xs">
              zepez.dev
            </Link>
          </footer>
        </div>
        <div className="dashed-grid-paper flex w-full items-center justify-center ">
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
    </main>
  );
}
