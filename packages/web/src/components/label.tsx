import { GrPowerReset } from "react-icons/gr";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LabelProps {
  name: string;
  value?: string | number;
  reset?: () => void;
  symbol?: string;
}

export default function Label(props: LabelProps) {
  const copy = () => {
    if (!props.value || !navigator.clipboard) return;

    const v =
      typeof props.value === "number" ? props.value.toString() : props.value;

    navigator.clipboard.writeText(v);
  };

  return (
    <div className="flex items-center justify-between pb-1 pt-4">
      <p>{props.name}</p>
      <span className="flex items-center justify-center text-xs">
        <Tooltip>
          <TooltipTrigger onClick={copy} className="max-w-32 truncate">
            {props.value}
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy {props.name}</p>
          </TooltipContent>
        </Tooltip>

        {props.symbol}
        {props.reset && (
          <Tooltip>
            <TooltipTrigger onClick={props.reset} className="ml-2">
              <GrPowerReset />
            </TooltipTrigger>
            <TooltipContent>
              <p>Reset {props.name}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </span>
    </div>
  );
}
