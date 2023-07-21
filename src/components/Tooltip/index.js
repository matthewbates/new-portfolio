import { Tooltip } from "react-tooltip";

export default function Tooltip({ props, children }) {
  return <Tooltip {...props}>{children}</Tooltip>;
}
