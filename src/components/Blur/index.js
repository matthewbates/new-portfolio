import { BlurContainer } from "./BlurElements";

export const Blur = ({ isOpen }) => {
  return isOpen && <BlurContainer isOpen={isOpen}></BlurContainer>;
};
