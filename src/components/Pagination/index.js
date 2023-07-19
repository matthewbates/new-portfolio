import { PaginationItem, PaginationContainer } from "./paginationElements";

export default function Pagination({
  blogs,
  toggle,
  activeIndex,
  handlePageChange,
  itemsPerPage,
}) {
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationItem
          activeIndex={activeIndex}
          index={index}
          key={index}
          onClick={() => {
            handlePageChange(index + 1);
            toggle(index);
          }}
        >
          {index + 1}
        </PaginationItem>
      ))}
    </PaginationContainer>
  );
}
