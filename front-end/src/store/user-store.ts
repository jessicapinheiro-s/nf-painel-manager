import { create } from "zustand";

type User = {
  user: {
    id: number,
    email: string;
    img_profile_url: string
  } | null;
  userUrlImage: string,
  setUser: (User: any) => void;
  setUserUrlImage: (url: string) => void;
};

export const useUserStore = create<User>((set) => ({
  user: null,
  userUrlImage: "",
  setUser: (User: any) => set({ user: User }),
  setUserUrlImage: (url: any) => set({ user: url }),
}));
