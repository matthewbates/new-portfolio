import { useRef, useEffect, useState } from "react";

import { BlogContainer, H2 } from "./BlogElements";

import BlogItem from "../../components/BlogItem";
import Pagination from "../../components/Pagination";

import { ITEMS_PER_PAGE } from "../../utils/data";
import { useFetchBlogs } from "../../utils/hooks";
import { animateTitle } from "../../utils/gsap";

export default function Blog({ theme }) {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const titleRef = useRef(null);

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  useFetchBlogs(setBlogs);

  useEffect(() => {
    animateTitle(titleRef, ".blog-div");
  }, []);

  return (
    <BlogContainer id="Blog">
      <H2 ref={titleRef}>
        Blogs <div className="blog-div"></div>
      </H2>
      <Pagination
        blogs={blogs}
        handlePageChange={handlePageChange}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      <BlogItem
        theme={theme}
        blogs={blogs}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </BlogContainer>
  );
}
