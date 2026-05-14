"use client";

import { useEffect, useRef } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";

import { auth } from "@/services/firebase";
import { LogoutAction } from "@/services/auth";
import { useAuthStore } from "@/store/useAuthStore";

export function AuthSync({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);
  const logout = useAuthStore((s) => s.logout);
  const prevUserRef = useRef<User | null | undefined>(undefined);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      const prev = prevUserRef.current;

      if (prev !== undefined && prev !== null && user === null) {
        void LogoutAction();
      }

      prevUserRef.current = user;

      if (user) {
        setUser(user);
      } else {
        logout();
      }

      setLoading(false);
    });
  }, [setUser, setLoading, logout]);

  return children;
}
