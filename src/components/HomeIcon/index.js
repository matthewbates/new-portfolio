import { TARGET, REL } from "../../utils/data";

export default function HomeIcon({ name, image, url, style, className }) {
  return (
    <a href={url} target={TARGET} rel={REL}>
      <img src={image} style={style} alt={name} className={className} />
    </a>
  );
}
