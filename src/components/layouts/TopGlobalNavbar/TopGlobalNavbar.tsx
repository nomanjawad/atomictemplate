"use client"

import { LanguageSelector } from "./LanguageSelector"
import { navbarData } from "@data"
import { icoEmail, icoPhone } from "@icons"
import { BaseImage } from "@atoms"

export default function TopGlobalNavbar() {
  return (
    <nav className="w-full py-1 bg-[#4a8def] text-white">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-4">
        {/* Left Section */}
        <div className="flex flex-row sm:flex-row gap-5 sm:gap-4 text-sm items-center whitespace-nowrap max-sm:flex-col max-sm:items-start max-sm:gap-1 max-sm:text-xs flex-1 min-w-0">
          <span className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
            <BaseImage
              src={icoEmail}
              alt="Email"
              width={16}
              height={16}
              className="shrink-0 brightness-0 invert w-4 h-4 max-sm:w-3 max-sm:h-3 md:w-3.5 md:h-3.5"
            />
            {`${navbarData.topNavbar.email}`}
          </span>
          <span className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
            <BaseImage
              src={icoPhone}
              alt="Phone"
              width={16}
              height={16}
              className="shrink-0 brightness-0 invert w-4 h-4 max-sm:w-3 max-sm:h-3 md:w-3.5 md:h-3.5"
            />
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
