/*
 * WhatsAppSection.tsx
 * Created by Abdul Jabbar Gazi
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

"use client"

import { BaseImage } from "@atoms"
import { icoWhatsApp } from "@icons"
import styles from "./whatsapp-section.module.css"

interface WhatsAppSectionProps {
  phoneNumber?: string
  message?: string
  image?: string
}

export default function WhatsAppSection({
  phoneNumber = "+880 1671-777774",
  message = "Hello! I'm interested in AMCO Skills.",
  image,
}: WhatsAppSectionProps) {
  //Removing any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, "")

  //WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    message
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
          {image ? (
            <BaseImage
              src={image}
              alt="WhatsApp"
              className={styles.whatsapp_image}
            />
          ) : (
            <BaseImage
              src={icoWhatsApp}
              alt="WhatsApp"
              className={styles.whatsapp_image}
            />
          )}
        </div>
      </a>
    </div>
  )
}
