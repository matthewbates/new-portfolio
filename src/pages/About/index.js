import { useRef, useEffect } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  AboutContainer,
  H2,
  AboutText,
  AboutSkills,
  Img,
} from "./AboutElements";

import CareerText from "../../components/CareerText";

import { aboutText, skills } from "../../utils/data";

export default function About() {
  const iconRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(iconRef.current, {
      scrollTrigger: {
        trigger: iconRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
  }, []);

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1em",
            fontFamily: "Raleway",
            padding: "0.5em",
          },
        },
      },
    },
  });

  return (
    <AboutContainer id="About">
      <AboutText>
        <H2>
          About <div></div>
        </H2>
        {aboutText.map((item, index) =>
          item.id === 1 ? (
            item.text
          ) : item.id === 2 ? (
            <CareerText key={index} item={item} />
          ) : (
            item.text
          )
        )}
        <AboutSkills>
          {skills.map(({ id, name, img, alt }) => (
            <div key={id}>
              <ThemeProvider theme={theme}>
                <Tooltip title={name} placement="bottom">
                  <Img
                    className="skills-icon"
                    ref={(el) => (iconRef.current[id] = el)}
                    src={img}
                    alt={alt}
                  />
                </Tooltip>
              </ThemeProvider>
            </div>
          ))}
        </AboutSkills>
      </AboutText>
    </AboutContainer>
  );
}
