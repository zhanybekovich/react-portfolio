import styles from "./socials.module.css";

export default function Socials() {
  return (
    <ul className={styles.socials}>
      <li>
        <a href="#">
          <img
            className={styles.icon}
            src="https://www.citypng.com/public/uploads/preview/square-facebook-icon-logo-701751694792363dzcy6kzzro.png"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            className={styles.icon}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1024px-Instagram-Icon.png"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            className={styles.icon}
            src="https://cdn-icons-png.freepik.com/256/2496/2496110.png?semt=ais_hybrid"
            alt=""
          />
        </a>
      </li>
    </ul>
  );
}
