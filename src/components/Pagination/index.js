import { useState } from "react";

import PaginationItem from "../PaginationItem";

import { PaginationContainer } from "./paginationElements";

export default function Pagination({ blogs, handlePageChange, itemsPerPage }) {
  const [activeindex, setActiveIndex] = useState(0);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  console.log(totalPages);

  const togglePage = (index) => {
    setActiveIndex(index === activeindex ? null : index);
  };

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationItem
          key={index}
          index={index}
          handlePageChange={handlePageChange}
          toggle={togglePage}
          activeindex={activeindex}
        />
      ))}
    </PaginationContainer>
  );
}
