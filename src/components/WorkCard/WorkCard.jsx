import styles from "./work-card.module.css";

export default function WorkCard({ work }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src="https://plus.unsplash.com/premium_photo-1732017765181-3b0f972778a3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={work.title}
      />
      <div>
        <h2 className={styles.title}>{work.title}</h2>
        <div className={styles.details}>
          <p className={styles.year}>{work.year}</p>
          <p>
            {work.categories.map((category) => (
              <span key={category.id} className={styles.category}>
                {category.name}
              </span>
            ))}
          </p>
        </div>
        <p className={styles.excerpt}>{work.excerpt}</p>
      </div>
    </div>
  );
}
