/*
 * useModal.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useState } from "react"

import type { UseModalReturn } from "./useModal.types"

/**
 * useModal: Manage modal open/close state.
 *
 * @returns isModalOpen, openModal,closeModal,.
 */
export default function useModal(): UseModalReturn {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return {
    isModalOpen,
    openModal,
    closeModal,
  }
}
