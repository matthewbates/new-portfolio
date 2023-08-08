import { A } from "./CareerTextElements";

import { TARGET, REL } from "../../utils/data";

export default function CareerText({ item }) {
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
      <A href={urlOne} target={TARGET} rel={REL}>
        {hyperlinkTextOne}
      </A>
      {textTwo}
      {textThree}
      <A>{hyperlinkTextTwo}</A>
      {textFour}
      {item.id === 3 && item.text}
    </>
  );
}
