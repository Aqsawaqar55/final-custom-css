import styles from "../footer/footer.module.css";

export default function Footer() {
  const categories = [
    { title: "CATEGORIES", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] },
    { title: "CATEGORIES", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] },
    { title: "CATEGORIES", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] },
    { title: "CATEGORIES", links: ["First Link", "Second Link", "Third Link", "Fourth Link"] }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.div2}>
          {categories.map((category, index) => (
            <div key={index} className={styles.div3}>
              <h2 className={styles.h2}>{category.title}</h2>
              <nav className={styles.l}>
                <ul>
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a className={styles.a}>{link}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.div5}>
        <p className={styles.p2}>© 2024 portfolio by AQSAWAQAR</p>
      </div>
    </footer>
  );
}
