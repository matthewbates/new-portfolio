// this component holds all gsap animations for the application
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animateNavbar = (logoRef, textRefs, isDesktop) => {
  const tl = gsap.timeline();

  tl.from(logoRef, {
    y: -100,
    opacity: 0,
  });

  if (isDesktop) {
    tl.from(textRefs.current, {
      y: -100,
      opacity: 0,
    });
  } else {
    tl.from(".burger", {
      y: -200,
      opacity: 0,
    });
  }
  return tl;
};

export const animateIcons = (iconRef) => {
  gsap.from(iconRef.current, {
    opacity: 0,
    stagger: 0.15,
    scrollTrigger: {
      trigger: iconRef.current,
      start: "top 60%",
    },
  });
};

export const animateTitle = (titleRef, className) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleRef.current,
      // first value: trigger element, second value: scroll element
      // ex: 20px 80% would mean 20px from top of the trigger element. when that hits 80% down in the viewport, that is when we want to trigger the animation
      start: "20px 90%",
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

export const animateText = (textRef) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: textRef.current,
      start: "top 90%",
    },
  });
  tl.from(textRef.current, {
    opacity: 0,
    y: 50,
  });
  return tl;
};

export const animateFreelance = (logoRef, title, text) => {
  gsap.from(logoRef.current, {
    ease: "power1.in",
  });
  gsap.from(title, {
    opacity: 0,
    y: 25,
    ease: "bounce",
    duration: 0.75,
    scrollTrigger: {
      trigger: title,
      start: "top 90%",
    },
  });
  gsap.from(text, {
    opacity: 0,
    y: 50,
    ease: "bounce",
    duration: 0.75,
    scrollTrigger: {
      start: "top 90%",
      trigger: text,
    },
  });
};
