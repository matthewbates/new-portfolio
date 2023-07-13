import axios from "axios";

import { BlogContainer, H2 } from "./BlogElements";

const USERNAME = "matthewhcbates";
const RSSURL = `https://medium.com/feed/@${USERNAME}`;
const RSSCONVERTER = `https://api.rss2json.com/v1/api.json?rss_url=${RSSURL}`;

export default function Blog() {
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(RSSCONVERTER);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchBlogs();

  return (
    <BlogContainer id="Blog">
      <H2>Blog</H2>
    </BlogContainer>
  );
}
