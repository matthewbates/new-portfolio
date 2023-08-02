// this component holds all gsap animations for the application
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

export const animateTitle = (titleRef, className) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleRef.current,
      start: "top center",
      toggleActions: "play none none none",
    },
  });
  tl.from(titleRef.current, {
    opacity: 0,
    x: -200,
  });
  tl.from(className, {
    opacity: 0,
    x: 200,
  });
  return tl;
};
