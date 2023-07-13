import { useEffect, useState } from "react";

import axios from "axios";

import {
  BlogContainer,
  H2,
  BlogItems,
  LI,
  BlogTitle,
  BlogImg,
} from "./BlogElements";

const USERNAME = "matthewhcbates";
const RSSURL = `https://medium.com/feed/@${USERNAME}`;
const RSSCONVERTER = `https://api.rss2json.com/v1/api.json?rss_url=${RSSURL}`;

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
    <BlogContainer id="Blog">
      <H2>Blogs</H2>
      <BlogItems>
        {blogs.map((blog) => (
          <LI>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogImg src={blog.thumbnail} />
          </LI>
        ))}
      </BlogItems>
    </BlogContainer>
  );
}
