/*
 * GalleryPage.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { Banner, PageHeader } from "@organisms"
import { GallerySnapshotSection } from "./GallerySnapshotSection"
import { galleryPageData } from "@data"

export default function GalleryPage() {
  return (
    <>
      {/* Gallery Hero with banner data */}
      <PageHeader
        banner={galleryPageData.banner}
        isVisibleBackground
        height="large"
      />

      {/* Gallery Snapshot Section */}
      <GallerySnapshotSection />

      {/* Call to Action */}
      <Banner />
    </>
  )
}
