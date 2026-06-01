import { create } from "zustand";

type User = {
  user: {
    id: number,
    email: string;
    name: string;
    img_profile_url: string
  } | null;
  userUrlImage: string,
  setUser: (User: any) => void;
  setUserUrlImage: (url: string) => void;
};

export const useUserStore = create<User>((set) => ({
  user: null,
  userUrlImage: "",
  name: "",
  setUser: (User: any) => set({ user: User }),
  setUserUrlImage: (url: any) => set({ user: url }),
}));
