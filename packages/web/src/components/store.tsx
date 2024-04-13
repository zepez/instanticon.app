import { create } from "zustand";

export interface IconState {
  icon: string;
  setIcon: (icon: string) => void;
  iconName: string;
  setIconName: (iconName: string) => void;
  iconSize: number;
  setIconSize: (size: number) => void;
  iconBorder: number;
  setIconBorder: (size: number) => void;
  iconRotate: number;
  setIconRotate: (size: number) => void;
  bgSize: number;
  bgPadding: number;
  setBgPadding: (padding: number) => void;
  bgRadius: number;
  setBgRadius: (radius: number) => void;
}

const useStore = create<IconState>()((set) => ({
  icon: "LuWand",
  setIcon: (icon: string) => set({ icon }),
  iconName: "Wand",
  setIconName: (iconName: string) => set({ iconName }),
  iconSize: 250,
  setIconSize: (iconSize: number) => set({ iconSize }),
  iconBorder: 2,
  setIconBorder: (iconBorder: number) => set({ iconBorder }),
  iconRotate: 0,
  setIconRotate: (iconRotate: number) => set({ iconRotate }),
  bgSize: 600,
  bgPadding: 50,
  setBgPadding: (bgPadding: number) => set({ bgPadding }),
  bgRadius: 10,
  setBgRadius: (bgRadius: number) => set({ bgRadius }),
}));

export default useStore;
