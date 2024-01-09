import { useState, useEffect } from "react";

import { FaRegArrowAltCircleUp } from "react-icons/fa";
import ToolTip from "../Tooltip";

import { ScrollToTopContainer } from "./ScrollToTopElements";

export default function ScrollToTop({ theme }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      currentScrollPos > 500 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {window.pageYOffset >= 500 && (
        <ToolTip title="Back to top" placement="left">
          <ScrollToTopContainer
            $visible={visible}
            theme={theme}
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            <FaRegArrowAltCircleUp style={{ fontSize: "3em" }} />
          </ScrollToTopContainer>
        </ToolTip>
      )}
    </>
  );
}
