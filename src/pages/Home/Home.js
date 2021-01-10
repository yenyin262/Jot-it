import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import styles from "./style.module.scss";
import { nanoid } from "nanoid";

export default function Home({ lists, setLists }) {
  const [showInput, setShowInput] = useState(false);

  const handleAdd = (text) => {
    let newLists = [...lists, { id: nanoid(), name: text, items: [] }];
    setLists(newLists);
    setShowInput(false);
  };

  const handleRemove = (id) => {
    let newLists = lists.filter((item) => item.id !== id);
    setLists(newLists);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.block_title}>Tasks Lists</div>
      {!showInput && (
        <div className={styles.btnContainer}>
          <button onClick={() => setShowInput(true)} className={styles.addbtn}>
            +
          </button>
          <span></span>
        </div>
      )}
      {showInput && (
        <div className={styles.btn_showInput}>
          <Form onAddStep={handleAdd} placeholder="Add List" />
        </div>
      )}

      <div className={styles.mainContainer}>
        {lists.map((list) => {
          return (
            <div className={styles.listContainer} key={list.id}>
              <Link className={styles.listLink} to={`/list/${list.id}`}>
                {list.name}
              </Link>
              <button
                className={styles.btn}
                onClick={() => handleRemove(list.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
