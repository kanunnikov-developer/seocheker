// app/components/form/Form.tsx
"use client";

import styles from "./styles.module.css";
import { useActionState, useEffect, useState } from "react";
import { Action } from "./lib/action";
import { useStore } from "@/app/store/useStore";
import { CITIES } from "./lib/constants";
import Image from "next/image";

export default function Form() {
  const [state, formAction, isPending] = useActionState(Action, null);

  const [domain, setDomain] = useState("");

  const setSearchResult = useStore((state) => state.setSearchResult);

  useEffect(() => {
    const savedDomain = localStorage.getItem("seo_checker_domain");
    if (savedDomain) {
      setDomain(savedDomain);
    }
  }, []);

  useEffect(() => {
    if (state?.success && state.data) {
      setSearchResult({
        domain: state.data.domain,
        keyword: state.data.keyword,
        location: state.data.location,
        position: state.data.position,
        organicResults: state.data.organicResults,
      });

      localStorage.setItem("seo_checker_domain", state.data.domain);
      console.log(state.data);
    }
  }, [state, setSearchResult]);

  return (
    <>
      <form className={styles.form_container} action={formAction}>
        <div className={styles.form_search}>
          {/* Поле Домена */}
          <div className={styles.formGroup}>
            <label>Домен сайта</label>
            <input
              type="text"
              name="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
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
            {isPending ? "Анализ выдачи Google..." : "Проверить позицию"}
          </button>
        </div>
      </form>
      <div className={styles.response}>
        <Image src="/icons/result.svg" alt="result icon" width={28} height={28} />
        <p>Результаты отчета появятся ниже</p>
      </div>
    </>
  );
}
