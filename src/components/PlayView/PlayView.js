import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

// test if component render with el and index
// onchecked prop is called with attribute el, index
//queryByText

export default function PlayView({ onChecked, el, index }) {
  // index is passed on to check if list is unchecked and checked

  const [checked, setChecked] = useState(false);

  // useEffect is needed so that when element changes it resets the state of checked

  useEffect(() => {
    setChecked(false);
  }, [el]);

  // when button is clicked setChecked becomes true
  // onChecked prop is called when setTimeout runs, which moves to the next item

  const handleClick = () => {
    setChecked(true);

    setTimeout(() => {
      onChecked(el, index);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="checkbox"
          checked={checked}
          readOnly
        />
      </div>
      <div className={styles.displayText}> {el.text}</div>
      <div className={styles.nextBtnContainer}>
        <button disabled={checked} onClick={() => handleClick()}>
          NEXT
        </button>
      </div>
    </div>
  );
}
