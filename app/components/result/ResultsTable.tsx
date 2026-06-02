// app/components/form/ResultsTable.tsx
"use client";

import { useStore } from "@/app/store/useStore";
import styles from "./styles.module.css";
import { CITIES } from "../form/lib/constants";

export default function ResultsTable() {
  const searchResult = useStore((state) => state.searchResult);

  if (!searchResult) return null;

  const { domain, keyword, location, position } = searchResult;

  const cityName = CITIES.find((c) => c.canonical === location)?.nameRu || "Неизвестный регион";

  const handleShare = () => {
    alert("Ссылка на результат скопирована!");
  };

  // Определяем статус позиции для понятного отображения
  const isTop50 = position > 0;
  const isTop10 = position > 0 && position <= 10;

  return (
    <div className={styles.results__container}>
      <div className="container">
        <div className={styles.results}>
          <div className={styles.results__row}>
            <div className={styles.results_header}>
              <h2 className={styles.results_title}>Результаты выдачи</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
