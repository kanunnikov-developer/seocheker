//app/components/hero/Hero.tsx

import Form from "../form/Form";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.left_content}>
            <div className={styles.blubor}>Бесплатно и без рекламы</div>
            <h1 className={styles.title}>Отслеживайте позиции своего сайта в поисковой выдаче Google</h1>
            <p className={styles.description}>
              Мгновенный анализ органической выдачи. Получите свежие данные по ключевым словам в один клик
            </p>
          </div>
          <div className={styles.left_advantages}>
            <div className={styles.advantages}>
              <p className={styles.advantages_title}>Быстро</p>
              <span className={styles.advantages_text}>Получите отчет за секунды</span>
            </div>
            <div className={styles.advantages}>
              <p className={styles.advantages_title}>Без лимитов</p>
              <span className={styles.advantages_text}>Неограниченное число проверок</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Form />
        </div>
      </div>
    </div>
  );
}
