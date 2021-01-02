import React, { useState } from "react";
import styles from "./firstpage.module.scss";

export default function Form({ onAddStep }) {
  const [text, setText] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    if (text) {
      onAddStep(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className={styles.textStyle}
          // placeholder="Add tasks"
        />

        <button className={styles.addbtn}>add</button>
      </form>
    </div>
  );
}
