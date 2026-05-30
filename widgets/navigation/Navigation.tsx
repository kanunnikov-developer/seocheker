import Image from "next/image";
import styles from "./styles.module.css";

export default function Navigation() {
  return (
    <div className="container">
      <div className={styles.navigation}>
        <Image src="/Logo.svg" width={39} height={39} alt="seoceker.ru" />
      </div>
    </div>
  );
}
