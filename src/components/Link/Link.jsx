import "./link.scss";

export default function Link({ children, url }) {
  return (
    <a href={url} className="link">
      {children}
    </a>
  );
}
