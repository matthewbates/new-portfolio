import { useState } from "react";

import {
  BlogContainer,
  H2,
  BlogItems,
  Img,
  Title,
  PubDate,
  Line,
} from "./BlogElements";

import { useFetchBlogs } from "../../utils/hooks";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useFetchBlogs(setBlogs);

  return (
    <BlogContainer id="Blog">
      <H2>Blogs</H2>
      <BlogItems>
        {blogs.map((blog, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <Img src={blog.thumbnail} />
            <Title>{blog.title}</Title>
            <PubDate>{blog.pubDate}</PubDate>
            <Line />
          </div>
        ))}
      </BlogItems>
    </BlogContainer>
  );
}
