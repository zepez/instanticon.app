import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import useStore from "@/components/store";

const PNG = ({ href }: { href: string }) => {
  const size = "50";

  return <img src={href} width={size} height={size} />;
};

export const Preset = ({
  onClick,
  href,
  tooltip,
}: {
  onClick: () => void;
  href: string;
  tooltip: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild tabIndex={-1}>
        <Button variant="ghost" size="auto" onClick={onClick}>
          <PNG href={href} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default function Presets() {
  const state = useStore();

  const two = () => {
    state.reset();
    state.setIcon("LuAperture");
    state.setIconName("Aperture");
    state.setIconSize(350);
    state.setIconBorderColor("rgb(255, 255, 255)");
    state.setBgPadding(50);
    state.setBgRadius(0);
    state.setBgColor("rgb(0, 0, 0)");
  };

  const three = () => {
    state.reset();
    state.setIcon("LuAperture");
    state.setIconName("Aperture");
    state.setIconSize(350);
    state.setIconBorderColor("rgb(0, 0, 0)");
    state.setBgPadding(50);
    state.setBgRadius(0);
    state.setBgColor("rgba(255, 237, 160, 1)");
  };

  const four = () => {
    state.reset();
    state.setIcon("LuAperture");
    state.setIconName("Aperture");
    state.setIconSize(350);
    state.setIconBorderColor("rgb(0, 0, 0)");
    state.setBgPadding(50);
    state.setBgRadius(25);
    state.setBgColor(
      "linear-gradient(90deg, RGBA(239,112,155,1) 0%, rgba(236,160,255,1) 100%)",
    );
  };

  return (
    <nav className="hidden items-center justify-center gap-1 lg:flex">
      <h2 className="flex items-center justify-center gap-4 pr-3">
        Presets <span>•</span>
      </h2>
      <Preset
        onClick={two}
        href="/presets/preset-2.png"
        tooltip="Professional"
      />
      <Preset
        onClick={three}
        href="/presets/preset-3.png"
        tooltip="Versatile"
      />
      <Preset onClick={four} href="/presets/preset-4.png" tooltip="Trendy" />
    </nav>
  );
}
