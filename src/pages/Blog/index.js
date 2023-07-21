import { useState } from "react";

import { BlogContainer, H2 } from "./BlogElements";

import BlogItem from "../../components/BlogItem";
import Pagination from "../../components/Pagination";

import { ITEMS_PER_PAGE } from "../../utils/data";
import { useFetchBlogs } from "../../utils/hooks";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  useFetchBlogs(setBlogs);

  return (
    <BlogContainer id="Blog">
      <H2>
        Blogs <div></div>
      </H2>
      <Pagination
        blogs={blogs}
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
