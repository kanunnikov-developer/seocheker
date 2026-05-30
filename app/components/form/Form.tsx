// app/components/form/Form.tsx
"use client";

import styles from "./styles.module.css";
import { useActionState, useEffect } from "react";
import { Action } from "./lib/action";
import { useStore } from "@/app/store/useStore";
import { CITIES } from "./lib/constants";

export default function Form() {
  const [state, formAction, isPending] = useActionState(Action, null);

  const setSearchResult = useStore((state) => state.setSearchResult);

  useEffect(() => {
    if (state?.success && state.data) {
      setSearchResult({
        domain: state.data.domain,
        keyword: state.data.keyword,
        location: state.data.location,
        position: state.data.position,
        organicResults: state.data.organicResults,
      });
    }
  }, [state, setSearchResult]);

  return (
    <form className={styles.form_container} action={formAction}>
      <div className={styles.form_search}>
        {/* Поле Домена */}
        <div className={styles.formGroup}>
          <label>Домен сайта</label>
          <input
            type="text"
            name="domain"
            className={`${styles.input} ${state?.errors?.domain ? styles.inputError : ""}`}
            placeholder="example.com"
          />
          {state?.errors?.domain && <p className={styles.errorText}>{state.errors.domain[0]}</p>}
        </div>

        {/* Поле Ключевого слова */}
        <div className={styles.formGroup}>
          <label>Ключевое слово</label>
          <input
            type="text"
            name="keyword"
            className={`${styles.input} ${state?.errors?.keyword ? styles.inputError : ""}`}
            placeholder="скачать кусры программирования"
          />
          {state?.errors?.keyword && <p className={styles.errorText}>{state.errors.keyword[0]}</p>}
        </div>

        {/* Поле Выбора региона */}
        <div className={styles.formGroup}>
          <label>Регион поиска</label>
          <select name="location" className={styles.select}>
            {CITIES.map((city) => (
              <option key={city.canonical} value={city.canonical}>
                {city.nameRu}
              </option>
            ))}
          </select>
          {state?.errors?.location && <p className={styles.errorText}>{state.errors.location[0]}</p>}
        </div>
      </div>
      <div className={styles.submit}>
        <button type="submit" className={styles.button} disabled={isPending}>
          {isPending ? "Анализ выдачи Google..." : "Проверить позиции"}
        </button>
      </div>
    </form>
  );
}
