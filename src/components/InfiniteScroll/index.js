import "./InfiniteScroll.css";

import React from "react";

import { ScrollContainer } from "./InfiniteScrollElements";

import { skills } from "../../utils/data";

const DURATION = 15000;
const ROWS = 2;
const TAGS_PER_ROW = 12;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => Math.random());

export default function InfiniteScroll() {
  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        }}
      >
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    );
  };

  return (
    <ScrollContainer>
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, index) => (
          <InfiniteLoopSlider
            key={index}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={index % 2}
          >
            {shuffle(skills)
              .slice(0, TAGS_PER_ROW)
              .map(({ id, img, alt }) => (
                <div key={id} className="tag">
                  <img src={img} alt={alt} />
                </div>
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </ScrollContainer>
  );
}
