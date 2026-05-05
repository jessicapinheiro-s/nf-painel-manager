import { create } from "zustand";

type User = {
  user: any;
  setUser: (User: any) => void;
};

export const useUserStore = create<User>((set) => ({
  user: null,
  setUser: (User: any) => set({ user: User }),
}));
