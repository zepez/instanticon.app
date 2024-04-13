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
  return (
    <div className="flex items-center justify-between pb-1 pt-4">
      <p>{props.name}</p>
      <span className="flex items-center justify-center text-xs">
        <span className="max-w-32 truncate">{props.value}</span>
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
