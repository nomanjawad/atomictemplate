"use client"

import { LanguageSelector } from "./LanguageSelector"
import { navbarData } from "@data"
import { Mail, Phone } from "lucide-react"

export default function TopGlobalNavbar() {
  return (
    <nav className="w-full py-1 bg-[#4a8def] text-white">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-4">
        {/* Left Section */}
        <div className="flex flex-row sm:flex-row gap-5 sm:gap-4 text-sm items-center whitespace-nowrap max-sm:flex-col max-sm:items-start max-sm:gap-1 max-sm:text-xs flex-1 min-w-0">
          <span className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
            <Mail className="shrink-0 w-4 h-4 max-sm:w-3 max-sm:h-3 md:w-3.5 md:h-3.5" />
            {`${navbarData.topNavbar.email}`}
          </span>
          <span className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
            <Phone className="shrink-0 w-4 h-4 max-sm:w-3 max-sm:h-3 md:w-3.5 md:h-3.5" />
            {`${navbarData.topNavbar.phone}`}
          </span>
        </div>

        {/* Right Section - Language Selector */}
        <div className="flex items-center shrink-0 max-sm:items-start max-sm:pt-0.5">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  )
}
