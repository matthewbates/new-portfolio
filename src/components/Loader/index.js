import { useRef, useEffect } from "react";

import gsap from "gsap";
import { TextPlugin } from "gsap/all";

import { LoaderContainer, LoaderItems } from "./LoaderElements";

export default function Loader() {
  const textRef = useRef(null);
  const countRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.from(textRef.current, {
      y: -200,
      opacity: 0,
      duration: 2,
    });
    gsap.from(countRef.current, {
      textContent: "0%",
      duration: 2.5,
      snap: { textContent: 1 },
    });
    gsap.from(percentageRef.current, {
      y: 200,
      opacity: 0,
      duration: 2,
    });
    gsap.to(textRef.current, {
      text: "Let's go!",
      delay: 3.5,
      duration: 0.0025,
    });
    gsap.to(percentageRef.current, {
      duration: 1,
      text: "Thanks for waiting",
      delay: 4.5,
      duration: 0.0025,
    });
  }, []);

  return (
    <LoaderContainer>
      <LoaderItems>
        <div ref={textRef}>
          <span>Loading...</span>
          <span ref={countRef}>100%</span>
        </div>
        {/* <div ref={percentageRef}>One moment, please</div> */}
      </LoaderItems>
    </LoaderContainer>
  );
}
