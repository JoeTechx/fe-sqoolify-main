'use client'
// userStore.ts
import { create } from "zustand";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber: string;
  policy: boolean;
  verificationCode?: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

// Create the Zustand store
export const useUserStore = create<UserStore>((set) => ({
  user: null, // Initial state
  setUser: (user: User) => set({ user }), // Method to set user
  clearUser: () => set({ user: null }), // Method to clear user
}));

