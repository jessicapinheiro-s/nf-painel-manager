import { create } from "zustand";

type ModalStore = {
  isOpen: boolean;
  item: {
    title: string,
    description: string,
    id?: string
  };
  type: "form-create-nf" | "message" | "loanding"
  className: string;
  openModal: () => void;
  closeModal: () => void;
  setItem: (item_title: string, item_description: string, item_id: string) => void;
  setType: (type_value: "form-create-nf" | "message" | "loanding") => void;
  setClassName: (class_name: string) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  item: {
    title: "",
    description: "",
    id: ""
  },
  type: "message",
  className: "",
  setItem: (item_title, item_description, item_id) => set({item: {
    title: item_title,
    description: item_description,
    id: item_id
  }}),
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setType: (type_value) => set({type: type_value}),
  setClassName: (class_name) => set({className: class_name})
}));
