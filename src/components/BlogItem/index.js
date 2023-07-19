import { BlogItems, Img, Title, PubDate, Line } from "./BlogItemElements";

import { TARGET, REL } from "../../utils/data";
import { formatDate, formatBlogTitle } from "../../utils/helpers";

export default function BlogItem({ blogs, currentPage, itemsPerPage }) {
  return (
    <BlogItems>
      {blogs
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map(({ thumbnail, title, pubDate, link }, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <Img src={thumbnail} />
            <a
              href={link}
              style={{ textDecoration: "none" }}
              target={TARGET}
              rel={REL}
            >
              <Title>{formatBlogTitle(title)}</Title>
            </a>
            <PubDate>{formatDate(pubDate)}</PubDate>
            <Line />
          </div>
        ))}
    </BlogItems>
  );
}
