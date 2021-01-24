import React, { useState } from "react";
import styles from "./style.module.scss";

export default function Form({ onAddStep, placeholder }) {
  const [text, setText] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    if (text) {
      onAddStep(text);
      setText("");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleAdd}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className={styles.textStyle}
          placeholder={placeholder}
          aria-label="field"
        />

        <button className={styles.addbtn}> add </button>
      </form>
    </div>
  );
}
