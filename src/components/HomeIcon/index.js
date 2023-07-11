const TARGET = "_blank";
const REL = "noopener noreferrer";

export default function HomeIcon({ name, image, url, style, className }) {
  return (
    <a href={url} target={TARGET} rel={REL}>
      <img src={image} style={style} alt={name} className={className} />
    </a>
  );
}
