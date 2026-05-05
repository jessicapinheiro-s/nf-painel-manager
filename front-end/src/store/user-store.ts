import { create } from "zustand";

type User = {
  user: {
    id: number,
    email: string;
  };
  setUser: (User: any) => void;
};

export const useUserStore = create<User>((set) => ({
  user: {
    id: 0,
    email: ""
  },
  setUser: (User: any) => set({ user: User }),
}));
