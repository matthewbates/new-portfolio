import {
  BlogContainer,
  BlogItems,
  Title,
  PubDate,
  Line,
} from "./BlogItemElements";

import { TARGET, REL } from "../../utils/data";
import { formatDate, formatBlogTitle } from "../../utils/helpers";

export default function BlogItem({ blogs, currentPage, itemsPerPage, theme }) {
  return (
    <BlogContainer>
      {blogs
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map(({ title, pubDate, link }, index) => (
          <a href={link} target={TARGET} rel={REL}>
            <BlogItems key={index} theme={theme}>
              <Title>{formatBlogTitle(title)}</Title>
              <PubDate>{formatDate(pubDate)}</PubDate>
              <Line theme={theme} />
            </BlogItems>
          </a>
        ))}
    </BlogContainer>
  );
}
