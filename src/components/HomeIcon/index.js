const TARGET = "_blank";
const REL = "noopener noreferrer";

export default function HomeIcon({ name, image, style, className }) {
  return (
    <a href="https://www.google.com" target={TARGET} rel={REL}>
      <img src={image} style={style} alt={name} className={className} />
    </a>
  );
}
