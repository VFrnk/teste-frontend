"use client";

import { ToastContainer } from "@/components/molecules/ToastContainer";
import { useToastStore } from "@/store/useToastStore";

export function ToastHost() {
  const toasts = useToastStore((s) => s.toasts);
  const removeToast = useToastStore((s) => s.removeToast);

  return <ToastContainer toasts={toasts} removeToast={removeToast} />;
}
