import { create } from "zustand";

import type { Toast, ToastType } from "@/types/ToastType";

interface ToastState {
  toasts: Toast[];
  addToast: (
    type: ToastType,
    title: string,
    message: string,
    duration?: number
  ) => void;
  removeToast: (id: number) => void;
}

let idSeq = 0;

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (type, title, message, duration = 5000) => {
    const id = Date.now() + (idSeq++ % 10_000);
    set((s) => ({
      toasts: [...s.toasts, { id, type, title, message, duration }],
    }));
  },
  removeToast: (id) =>
    set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));
