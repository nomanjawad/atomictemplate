/*
 * gallery.type.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */
export interface GalleryProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  variant?: "uniform" | "masonry";
  minItemWidth?: number;
  aspectRatio?: string | number;
  className?: string;
  rounded?: boolean;
}
