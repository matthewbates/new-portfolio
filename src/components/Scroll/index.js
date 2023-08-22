import {
  ScrollContainer,
  ScrollItems,
  ScrollItemsWrapper,
  Fade,
} from "./ScrollElements";

import InfiniteLoopSlider from "../InfiniteLoopSlider";

import { skills, DURATION } from "../../utils/data";
import { generateSpeed } from "../../utils/helpers";

export default function Scroll() {
  const groupedSkills = skills.reduce((groups, skill) => {
    if (!groups[skill.group]) {
      groups[skill.group] = [];
    }
    groups[skill.group].push(skill);
    console.log(groups[skill.group]);
    return groups;
  }, {});

  return (
    <ScrollContainer skillsCount={skills.length}>
      <ScrollItems>
        {Object.keys(groupedSkills).map((group, index) => (
          <InfiniteLoopSlider
            key={group}
            duration={generateSpeed(DURATION - 5000, DURATION + 5000)}
            reverse={index % 2}
          >
            {groupedSkills[group].map(({ id,  img, alt }) => (
              <ScrollItemsWrapper key={id}>
                <img src={img} alt={alt} />
              </ScrollItemsWrapper>
            ))}
          </InfiniteLoopSlider>
        ))}
        <Fade />
      </ScrollItems>
    </ScrollContainer>
  );
}
