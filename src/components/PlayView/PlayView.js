import React from "react";
import styles from "./style.module.scss";

export default function SecondPage({ onChecked, el, index }) {
  // index is passed on to check if list is unchecked and checked
  return (
    <div className={styles.container}>
      <div className={styles.results}>
        <input
          type="checkbox"
          checked={el.checked}
          onChange={() => onChecked(el, index)}
        />
        {el.text}
      </div>
    </div>
  );
}
