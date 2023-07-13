import { useState, useEffect } from "react";

import { ScrollToTopContainer } from "./ScrollToTopElements";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      currentScrollPos > 250 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollToTopContainer
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      visible={visible}
    >
      back to top
    </ScrollToTopContainer>
  );
}
