import { useState } from "react";

import { SkillsContainer, SkillsWrapper, SkillsItems } from "./SkillsElements";

import { icons } from "../../utils/data";
import Card from "../../components/Card";

export default function Skills() {
  const [group, setGroup] = useState("Languages & Frameworks");
  const uniqueGroups = Array.from(new Set(icons.map((icon) => icon.group)));

  return (
    <SkillsContainer id="Skills">
      <SkillsWrapper>
        {/* {uniqueGroups.map((group, index) => (
          <div key={index}>
            <h2>{group}</h2>
            <Card>
              {icons
                .filter((icon) => icon.group === group)
                .map((icon) => (
                  <Card
                    key={icon.id}
                    img={icon.img}
                    name={icon.name}
                    label={icon.label}
                    alt={icon.alt}
                  />
                ))}
            </Card>
          </div>
        ))} */}
        <h2>Skills</h2>
        {icons.map((icon) => (
          <Card>
            <h5 style={{ fontFamily: "Arial", width: "100%" }}>{icon.name}</h5>
            <img src={icon.img} style={{ height: "75px", width: "75px" }} />
          </Card>
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
}
