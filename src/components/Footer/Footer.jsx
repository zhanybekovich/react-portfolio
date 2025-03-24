import Socials from "../Socials/Socials";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Socials />
      </div>
    </footer>
  );
}
