/*
 * Pagination.types.ts
 * Created by Abdul Jabbar Gazi
 * Copyright (c) 2025 Skytech Solutions
 * All rights reserved
 */

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
