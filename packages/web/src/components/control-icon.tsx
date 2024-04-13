import { useState } from "react";
import * as lucide from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import useStore from "@/components/store";

export default function ControlIcon() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const state = useStore();

  const onIconChange = (icon: string) => {
    state.setIcon(icon);

    const fullName = icon.replace(/([A-Z])/g, " $1").trim();
    const fullNameArray = fullName.split(" ");
    const name = fullNameArray.slice(1).join(" ");

    state.setIconName(name);

    setOpen(false);
  };

  const CurrentIcon = lucide[state.icon as keyof typeof lucide];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-muted flex w-full items-center justify-center rounded-md py-4">
        <CurrentIcon
          key={state.icon}
          size={48}
          className="text-foreground/70"
        />
      </DialogTrigger>
      <DialogContent className="h-[80vh]">
        <DialogHeader>
          <DialogTitle>Pick an icon</DialogTitle>
          <DialogDescription className="flex items-center justify-start gap-2 pb-3 text-xs">
            Lucide <span>•</span>
            <a
              href="https://github.com/lucide-icons/lucide"
              className="text-xs"
              target="_blank"
            >
              Source
            </a>
          </DialogDescription>

          <Input
            placeholder="Search"
            value={query}
            onChange={(v) => setQuery(v.target.value)}
          />
        </DialogHeader>

        <ScrollArea className="h-[60vh]">
          <div className="flex flex-wrap justify-start gap-2">
            {Object.keys(lucide).map((icon) => {
              if (!icon.toLowerCase().includes(query.toLowerCase()))
                return null;

              const Icon = lucide[icon as keyof typeof lucide];
              return (
                <button
                  key={icon}
                  onClick={() => onIconChange(icon)}
                  className="bg-muted hover:bg-muted-foreground/20 rounded-md p-4"
                >
                  <Icon key={icon} size={24} />
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
