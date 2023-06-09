import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="" className={styles.logo}>
        <Image
          src="/images/logo.png"
          width={50}
          height={50}
          alt="logo"
          className={styles.image}
        />
        <h1 className={styles.title}>CRAIG NORFORD</h1>
      </Link>

      <div className={styles.links}>
        <Link className={styles.buttonPrimary} href="#">
          contact
        </Link>
      </div>
    </div>
  );
};
