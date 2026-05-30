{/_ Поле Ключевых слов _/}
{/_ <div className={styles.formGroup}>
<div className={styles.labelWithCounter}>
<label className={styles.label}>Ключевые слова (до 5 шт.)</label>
<span className={`${styles.counter} ${keywordCount > 5 ? styles.counterOver : ""}`}>{keywordCount}/5</span>
</div>
<textarea
className={`${styles.textarea} ${keywordError ? styles.inputError : ""}`}
placeholder="Каждое слово с новой строки, через запятую или двойной пробел"
value={rawKeywords}
onChange={handleKeywordChange}
disabled={isLoading}
rows={4}
/>
{keywordCount > 5 && <p className={styles.warningText}>Будут проверены только первые 5 ключевых слов</p>}
{keywordError && <p className={styles.errorText}>{keywordError}</p>}
</div> _/}

        {/* Кастомный Селект Регионов
        <div className={styles.formGroup}>
          <label>Регион поиска (Google)</label>
          <div className={styles.customSelectContainer} ref={selectRef}>
            <div
              className={`${styles.input} ${styles.selectHeader} ${isOpen ? styles.selectHeaderOpen : ""} ${locationError ? styles.inputError : ""}`}
              onClick={() => !isLoading && setIsOpen(!isOpen)}
            >
              <span>{selectedName}</span>
              <svg
                className={`${styles.selectArrow} ${isOpen ? styles.arrowRotate : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="6 9 12 15 18 9"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {isOpen && (
              <div className={styles.selectDropdown}>
                {CITIES.map((city) => (
                  <div
                    key={city.value}
                    className={`${styles.selectOption} ${location === city.value ? styles.selectOptionActive : ""}`}
                    onClick={() => handleSelectCity(city.name, city.value)}
                  >
                    {city.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          {locationError && <p className={styles.errorText}>{locationError}</p>}
        </div> */}
