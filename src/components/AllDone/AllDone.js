import { FaCheck } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
export default function AllDone({ onClick, list }) {
  return (
    <div className={styles.container}>
      <FaCheck size="2rem" />

      <div className={styles.textStyle}>All Done! </div>

      <button className={styles.button} onClick={onClick}>
        Return to {list.name}
      </button>
      <Link className={styles.homeLink} to="/">
        Home
      </Link>
    </div>
  );
}
