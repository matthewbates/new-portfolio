import { useState } from "react";

import { BlogContainer, H2, BlogItems, Img } from "./BlogElements";

import { useFetchBlogs } from "../../utils/hooks";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useFetchBlogs(setBlogs);

  return (
    <section id="Blog">
      <BlogContainer>
        <H2>Blogs</H2>
        <BlogItems>
          {blogs.map((blog, index) => (
            <Img key={index} src={blog.thumbnail} alt="img" />
          ))}
        </BlogItems>
      </BlogContainer>
    </section>
  );
}
