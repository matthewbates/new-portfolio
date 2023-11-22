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
  const groupedSkills = skills.reduce((groups, skill) => {
    if (!groups[skill.group]) {
      groups[skill.group] = [];
    }
    groups[skill.group].push(skill);
    return groups;
  }, {});

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
              <ToolTip key={id} title={name}>
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
