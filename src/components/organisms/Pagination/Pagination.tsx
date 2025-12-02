/*
 * Pagination.tsx
 * Created by Abdul Jabbar Gazi
 * Copyright (c) 2025 Skytech Solutions
 * All rights reserved
 */

"use client";

import React from "react";
import clsx from "clsx";

import { PaginationProps } from "./Pagination.types";
import styles from "./pagination.module.css";
import { Button, Content } from "@atoms";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const pageNeighbours = 1;

    const renderPageButton = (pageNumber: number) => {
      return (
        <Button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={clsx(
            styles.pageButton,
            currentPage === pageNumber && styles.activePage
          )}
        >
          {pageNumber}
        </Button>
      );
    };

    pageNumbers.push(renderPageButton(1));

    if (currentPage > pageNeighbours + 2) {
      pageNumbers.push(<span key="left-ellipsis">...</span>);
    }

    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(renderPageButton(i));
    }

    if (currentPage < totalPages - pageNeighbours - 1) {
      pageNumbers.push(<span key="right-ellipsis">...</span>);
    }

    if (totalPages > 1) {
      pageNumbers.push(renderPageButton(totalPages));
    }

    return pageNumbers;
  };

  return (
    <Content
      justify="center"
      align="center"
      gap="sm"
      className={styles.pagination_wrapper}
    >
      {currentPage > 1 && (
        <Button onClick={handlePrevious} className={styles.navButton}>
          {"<"}
        </Button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <Button onClick={handleNext} className={styles.navButton}>
          {">"}
        </Button>
      )}
    </Content>
  );
}
