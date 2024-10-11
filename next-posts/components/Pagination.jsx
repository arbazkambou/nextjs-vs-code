"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function PaginationComponent({ docsCount }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(docsCount / 10);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(
    function () {
      const params = new URLSearchParams(searchParams);
      params.set("page", page);
      router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    },
    [page]
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              page > 1 && setPage(page - 1);
            }}
          />
        </PaginationItem>
        {page > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setPage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}
        {page > 3 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  setPage(page - 2);
                }}
              >
                {page - 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {page < totalPages && (
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setPage(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              page < totalPages && setPage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
