/*
 * useNavbarStore.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { create } from "zustand"

interface NavbarStore {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  isVisible: true,
  setIsVisible: (visible: boolean) => set({ isVisible: visible }),
}))
