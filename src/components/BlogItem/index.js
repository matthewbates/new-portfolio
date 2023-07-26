import { useState } from "react";

import {
  BlogContainer,
  BlogItems,
  Img,
  Title,
  PubDate,
  Line,
} from "./BlogItemElements";

import { TARGET, REL } from "../../utils/data";
import { formatDate, formatBlogTitle } from "../../utils/helpers";

export default function BlogItem({ blogs, currentPage, itemsPerPage }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BlogContainer>
      {blogs
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map(({ thumbnail, title, pubDate, link }, index) => (
          <BlogItems
            key={index}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <a href={link} target={TARGET} rel={REL}>
              <Img src={thumbnail} />
            </a>
            <Title hovered={isHovered === index ? "true" : "false"}>
              {formatBlogTitle(title)}
            </Title>
            <PubDate>{formatDate(pubDate)}</PubDate>
            <Line />
          </BlogItems>
        ))}
    </BlogContainer>
  );
}
