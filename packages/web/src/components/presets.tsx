import { Button } from "@/components/ui/button";
import useStore from "@/components/store";

const Load = ({ href }: { href: string }) => {
  const size = "50";

  return (
    <svg width={size} height={size}>
      <image xlinkHref={href} width={size} height={size} />
    </svg>
  );
};

export default function Presets() {
  const state = useStore();

  const two = () => {
    state.setIcon("LuCross");
    state.setIconName("Cross");
    state.setIconRotate(45);
    state.setIconSize(400);
    state.setBgPadding(50);
    state.setBgRadius(25);
  };

  return (
    <nav className="flex items-center justify-center gap-1">
      <h2 className="flex items-center justify-center gap-4 pr-3">
        Presets <span>•</span>
      </h2>
      <Button variant="ghost" size="auto" onClick={two}>
        <Load href="/presets/preset-2.svg" />
      </Button>
      <Button variant="ghost" size="auto" onClick={two}>
        <Load href="/presets/preset-2.svg" />
      </Button>
      <Button variant="ghost" size="auto" onClick={two}>
        <Load href="/presets/preset-2.svg" />
      </Button>
    </nav>
  );
}
