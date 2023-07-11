import { useState, useEffect } from "react";
import { HomeContainer, HomeItems } from "./HomeElements";
import { icons } from "../../utils/data";
import HomeIcon from "../../components/HomeIcon";

export default function Home() {
  const [iconStyles, setIconStyles] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const updatedStyles = icons.map((icon) => {
        let height = window.innerWidth > 820 ? "52px" : "42px";
        if (icon.name === "Github" && window.innerWidth > 820) {
          height = "60px";
        }
        return {
          ...icon,
          style: {
            ...icon.style,
            height,
          },
        };
      });
      setIconStyles(updatedStyles);
    };
    // initial call to set the styles based on the current window size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HomeContainer id="Home">
      <HomeItems>
        <div>Hi, my name is</div>
        <div>Matthew Bates.</div>
        <div>I build things for the web.</div>
        <div>
          {iconStyles.map(({ id, name, image, style }) => (
            <HomeIcon
              key={id}
              name={name}
              image={image}
              style={style}
              className="icon"
            />
          ))}
        </div>
      </HomeItems>
    </HomeContainer>
  );
}
