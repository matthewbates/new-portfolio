import { A } from "./CareerTextElements";

import { TARGET, REL } from "../../utils/data";

export default function CareerText({ item }) {
  const {
    textOne,
    hyperlinkTextOne,
    urlOne,
    textTwo,
    hyperlinkTextTwo,
    urlTwo,
    textThree,
    textFour,
  } = item;

  return (
    <p style={{ position: "relative" }}>
      {textOne}
      <A href={urlOne} target={TARGET} rel={REL}>
        {hyperlinkTextOne}
      </A>
      {textTwo}
      {textThree}
      <A>{hyperlinkTextTwo}</A>
      {/* <A href={urlTwo} target={TARGET} rel={REL}>
        {hyperlinkTextTwo}
      </A> */}
      {textFour}
    </p>
  );
}
