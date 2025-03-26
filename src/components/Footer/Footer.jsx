import Socials from "../Socials/Socials";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Socials />
        <p className={styles.copyright}>
          Все права защищены. &copy; {new Date().getFullYear()} Portfolio.com
        </p>
      </div>
    </footer>
  );
}
