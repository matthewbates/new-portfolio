import { Fragment } from "react";

import { SkillsContainer, SkillsWrapper, SkillsItems } from "./SkillsElements";

import { icons } from "../../utils/data";
import Card from "../../components/Card";

export default function Skills() {
  return (
    <SkillsContainer id="Skills">
      <SkillsWrapper>
        {Object.entries(icons).map(([key, value]) => (
          <Fragment key={key}>
            <h2>{key}</h2>
            <Card>
              {Object.entries(value).map(([subKey, subValue]) => (
                <SkillsItems key={subKey}>
                  <img src={subValue.img} alt={subValue.alt} />
                </SkillsItems>
              ))}
            </Card>
          </Fragment>
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
}
