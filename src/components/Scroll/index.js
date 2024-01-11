import {
  ScrollContainer,
  ScrollItems,
  ScrollItemsWrapper,
  Fade,
} from "./ScrollElements";

import InfiniteLoopSlider from "../InfiniteLoopSlider";

import { skills, DURATION } from "../../utils/data";
import { generateSpeed } from "../../utils/helpers";
import ToolTip from "../Tooltip";

export default function Scroll({ theme }) {
  const groupedSkills = skills.reduce((acc, currentValue) => {
    console.log(acc);
    if (!acc[currentValue.group]) {
      acc[currentValue.group] = [];
    }
    acc[currentValue.group].push(currentValue);
    return acc;
  }, []);

  return (
    <ScrollContainer $skillsCount={skills.length}>
      <ScrollItems>
        {Object.keys(groupedSkills).map((group, index) => (
          <InfiniteLoopSlider
            key={group}
            duration={generateSpeed(DURATION - 5000, DURATION + 5000)}
            reverse={index % 2}
          >
            {groupedSkills[group].map(({ id, name, img, alt }) => (
              <ToolTip key={id} title={name} placement="top">
                <ScrollItemsWrapper>
                  <img src={img} alt={alt} />
                </ScrollItemsWrapper>
              </ToolTip>
            ))}
          </InfiniteLoopSlider>
        ))}
        <Fade theme={theme} />
      </ScrollItems>
    </ScrollContainer>
  );
}
