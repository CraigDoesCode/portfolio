import styles from "./Banner.module.scss";
export const Banner = () => {
  return (
    <section className={`${styles.banner} ${styles.container}`}>
      <h1 className={styles.text}>FullStack | Engineer | Educator | EdTech</h1>
    </section>
  );
};
