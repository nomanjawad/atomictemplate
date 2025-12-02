/*
 * WhatsAppSection.tsx
 * Created by Abdul Jabbar Gazi
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

"use client"

import { MessageCircle } from "lucide-react"
import styles from "./whatsapp-section.module.css"

interface WhatsAppSectionProps {
  phoneNumber?: string
  message?: string
  image?: string
}

export default function WhatsAppSection({
  phoneNumber = "+880 1671-777774",
  message = "Hello! I'm interested in AMCO Skills.",
}: WhatsAppSectionProps) {
  //Removing any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, "")

  //WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    message,
  )}`

  return (
    <div className={styles.whatsapp_container}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp_link}
        aria-label="Contact us on WhatsApp"
      >
        <div className={styles.whatsapp_icon}>
          <MessageCircle className="w-12 h-12 text-white" />
        </div>
      </a>
    </div>
  )
}
