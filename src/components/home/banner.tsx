import styles from "./Banner.module.scss";
export const Banner = () => {
  return (
    <section className={`${styles.banner} ${styles.container}`}>
      <h1 className={styles.text}>FullStack | Software Engineer 👋</h1>
    </section>
  );
};
