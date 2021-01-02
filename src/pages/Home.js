import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import styles from "../components/firstpage.module.scss";
import List from "./List";
import { nanoid } from "nanoid";

export default function Home({ lists, setLists }) {
  const handleAdd = (text) => {
    let newLists = [...lists, { id: nanoid(), name: text, items: [] }];
    setLists(newLists);
  };

  const handleRemove = (id) => {
    let newLists = lists.filter((item) => item.id !== id);
    setLists(newLists);
  };
  return (
    <div className={styles.homeContainer}>
      <Form onAddStep={handleAdd} />
      {lists.map((list) => {
        // /list/1
        // list/1
        return (
          <div key={list.id}>
            <Link to={`/list/${list.id}`}>{list.name}</Link>
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
  );
}
