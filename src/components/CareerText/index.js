import { A } from "./CareerTextElements";

import { TARGET, REL } from "../../utils/data";

export default function CareerText({ item, theme }) {
  const {
    textOne,
    hyperlinkTextOne,
    urlOne,
    textTwo,
    hyperlinkTextTwo,
    textThree,
    textFour,
  } = item;

  return (
    <>
      {item.id === 1 && item.text}
      {textOne}
      <A theme={theme} href={urlOne} target={TARGET} rel={REL}>
        {hyperlinkTextOne}
      </A>
      {textTwo}
      {textThree}
      <A theme={theme}>{hyperlinkTextTwo}</A>
      {textFour}
      {item.id === 3 && item.text}
    </>
  );
}
