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
import {
  formatDate,
  formatBlogTitle,
  toggleHovered,
} from "../../utils/helpers";

export default function BlogItem({ blogs, currentPage, itemsPerPage, theme }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BlogContainer>
      {blogs
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map(({ thumbnail, title, pubDate, link }, index) => (
          <BlogItems
            key={index}
            onMouseEnter={() => toggleHovered(isHovered, setIsHovered)}
            onMouseLeave={() => toggleHovered(isHovered, setIsHovered)}
          >
            <a href={link} target={TARGET} rel={REL}>
              <Img src={thumbnail} alt={title} />
            </a>
            <Title $hovered={isHovered === index ? "true" : "false"}>
              {formatBlogTitle(title)}
            </Title>
            <PubDate>{formatDate(pubDate)}</PubDate>
            <Line theme={theme} />
          </BlogItems>
        ))}
    </BlogContainer>
  );
}
