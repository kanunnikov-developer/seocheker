//app/components/hero/Hero.tsx

import Image from "next/image";
import Form from "../form/Form";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={styles.hero__container}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.bg_image}>
            <Image
              loading="eager"
              src="/bg-image.png"
              width={350}
              height={350}
              alt="Фоновая картинка"
              className={styles.bg_img}
            />
          </div>
          <div className={styles.hero__row}>
            <div className={styles.left}>
              <span className={styles.blubor}>Бесплатно и без рекламы</span>
              <h1 className={styles.title}>
                Отслеживайте <span className="accent">позиции своего сайта</span> в поисковой выдаче Google
              </h1>
              <p className={styles.description}>
                Мгновенный анализ органической выдачи. {"\n"} Получите свежие данные в один клик
              </p>
              <Image src="/icons/clicker.svg" width={30} height={30} alt="clicker" className={styles.clicker} />
              <div className={styles.adventures}>
                <div className={styles.adventure}>
                  <div className={styles.icon}>
                    <Image src="/icons/limit.svg" width={23} height={23} alt="nolimit" />
                  </div>
                  <div className={styles.adventure__text}>
                    <h3>Без лимитов</h3>
                    <span>Неограниченное число проверок</span>
                  </div>
                </div>
                <div className={styles.adventure}>
                  <div className={styles.icon}>
                    <Image src="/icons/internet.svg" width={23} height={23} alt="internet" />
                  </div>
                  <div className={styles.adventure__text}>
                    <h3>Точные данные</h3>
                    <span>Актуальная информация из Google</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
