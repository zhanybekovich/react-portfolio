import "./accent-btn.scss";

export default function AccentBtn({ children, url }) {
  return (
    <a href={url} className="accent-btn">
      {children}
    </a>
  );
}
