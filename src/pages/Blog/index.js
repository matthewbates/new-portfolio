import { useState } from "react";

import { BlogContainer, H2 } from "./BlogElements";

import BlogItem from "../../components/BlogItem";
import Pagination from "../../components/Pagination";

import { useFetchBlogs } from "../../utils/hooks";

const ITEMS_PER_PAGE = 4;

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const togglePage = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };



  useFetchBlogs(setBlogs);

  return (
    <BlogContainer id="Blog">
      <H2>Blogs</H2>
      <Pagination
        blogs={blogs}
        activeIndex={activeIndex}
        toggle={togglePage}
        handlePageChange={handlePageChange}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      <BlogItem
        blogs={blogs}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </BlogContainer>
  );
}
