// this component holds all gsap animations for the application
import gsap from "gsap";

export const animateNavbar = (logoRef, textRefs, isDesktop) => {
  const tl = gsap.timeline();

  tl.from(logoRef, {
    y: -100,
    opacity: 0,
    duration: 0.5,
  });

  if (isDesktop) {
    tl.from(textRefs.current, {
      y: -100,
      opacity: 0,
    });
  } else {
    tl.from(".burger", {
      y: -100,
      opacity: 0,
    });
  }
  return tl;
};
