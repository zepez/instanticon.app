import { create } from "zustand";

export interface IconState {
  reset: (key?: keyof typeof initial) => void;
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
  iconOffsetX: number;
  setIconOffsetX: (size: number) => void;
  iconOffsetY: number;
  setIconOffsetY: (size: number) => void;
  iconBorderColor: string;
  setIconBorderColor: (color: string) => void;
  iconFillColor: string;
  setIconFillColor: (color: string) => void;
  bgPadding: number;
  setBgPadding: (padding: number) => void;
  bgRadius: number;
  setBgRadius: (radius: number) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
}

const initial = {
  icon: "LuWand2",
  iconName: "Wand2",
  iconSize: 400,
  iconBorder: 2,
  iconRotate: 0,
  iconOffsetX: 0,
  iconOffsetY: 0,
  iconBorderColor: "rgb(255, 255, 255)",
  iconFillColor: "rgb(0, 0, 0, 0)",
  bgPadding: 50,
  bgRadius: 10,
  bgColor: "rgb(0, 0, 0)",
};

const useStore = create<IconState>()((set) => ({
  ...initial,
  reset: (key?: keyof typeof initial) => {
    if (key) {
      set({ [key]: initial[key] });
    } else {
      set(initial);
    }
  },
  setIcon: (icon: string) => set({ icon }),
  setIconName: (iconName: string) => set({ iconName }),
  setIconSize: (iconSize: number) => set({ iconSize }),
  setIconBorder: (iconBorder: number) => set({ iconBorder }),
  setIconRotate: (iconRotate: number) => set({ iconRotate }),
  setIconOffsetX: (iconOffsetX: number) => set({ iconOffsetX }),
  setIconOffsetY: (iconOffsetY: number) => set({ iconOffsetY }),
  setIconBorderColor: (iconBorderColor: string) => set({ iconBorderColor }),
  setIconFillColor: (iconFillColor: string) => set({ iconFillColor }),
  setBgPadding: (bgPadding: number) => set({ bgPadding }),
  setBgRadius: (bgRadius: number) => set({ bgRadius }),
  setBgColor: (bgColor: string) => set({ bgColor }),
}));

export default useStore;
