import styles from "@/styles/Banner.module.scss";
export const Banner = () => {
  return (
    <section className={`${styles.banner} ${styles.container}`}>
      <h1 className={styles.intro}>Hi, I&apos;m Craig 👋</h1>
    </section>
  );
};
