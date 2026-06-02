import Image from "next/image";
import styles from "./styles.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation__container}>
      <div className="container">
        <div className={styles.navigation}>
          <div className={styles.navigation__row}>
            <a href="/" className={styles.logo}>
              <Image src="/Logo.svg" width={35} height={32} alt="seoceker.ru" />
              <span>seocheker</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
