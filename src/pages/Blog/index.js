import { useEffect, useState } from "react";

import axios from "axios";

import { BlogContainer, H2, BlogItems, Img } from "./BlogElements";

import { RSSCONVERTER } from "../../utils/data";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(RSSCONVERTER);
        if (response.status === 200) {
          console.log(response);
          setBlogs(response.data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <section id="Blog">
      <BlogContainer>
        <H2>Blogs</H2>
        <BlogItems>
          {blogs.map((blog) => (
            <Img src={blog.thumbnail} alt="img" />
          ))}
        </BlogItems>
      </BlogContainer>
    </section>
  );
}
