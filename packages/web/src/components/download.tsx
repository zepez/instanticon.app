"use client";

import { usePlausible } from "next-plausible";
import { toPng, toSvg } from "html-to-image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Download() {
  const plausible = usePlausible();

  const download = async (type: "svg" | "png") => {
    const render = document.getElementById("render");
    if (!render) return;

    let uri = "";

    if (type === "svg") {
      uri = await toSvg(render);
      plausible("download-svg");
    }

    if (type === "png") {
      uri = await toPng(render);
      plausible("download-png");
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = uri;
    downloadLink.download = "instant-icon." + type;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Download</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => download("svg")}>
          Download SVG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => download("png")}>
          Download PNG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
