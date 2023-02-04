import { ChevronLeft, ChevronRight } from "../../assets/svg/chevrons";
import { usePagination } from "../../hooks/usePagination";
import {
  PageDots,
  PageItem,
  PaginatorContainer,
} from "../../styled-components/paginator/paginator.styled";
import { styledVariables } from "../../styled-components/variables.styled";

function Paginator({
  onPageChange,
  totalItems,
  siblingCount = 1,
  currentPage,
  itemsPerPage,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPageChange: any;
  totalItems: number;
  siblingCount?: number;
  currentPage: number;
  itemsPerPage: number;
}): JSX.Element | null {
  const paginationRange = usePagination({
    totalItems,
    itemsPerPage,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <PaginatorContainer>
      <li onClick={onPrevious}>
        <ChevronLeft color={styledVariables.$fontThirdColor} />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === "...") {
            return (
              <PageDots key={`dots#${index}`} active={false}>
                &#8230;
              </PageDots>
            );
          }
          return (
            <PageItem
              key={`page#${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
              active={pageNumber === currentPage}>
              {pageNumber}
            </PageItem>
          );
        })}
      <li onClick={onNext}>
        <ChevronRight color={styledVariables.$fontThirdColor} />
      </li>
    </PaginatorContainer>
  );
}

export default Paginator;
