import { UIState } from "@/types/ui";
import { create } from "zustand";

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,

  // fungsi buka tutup toggle
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  // Fungsi tutup paksa
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
