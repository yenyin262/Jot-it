import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import styles from "./style.module.scss";
import { nanoid } from "nanoid";
import taskIcon from "../../assets/task.png";
import binIcon from "../../assets/bin.svg";

export default function Home({ lists, setLists }) {
  // add function that generates the color
  // put color into the list view templated [ id name, item]
  // click on that button > pass in as prop

  //

  // const handleColors = () => {
  // generate random number :)
  // Math.floor(Math.random * (max-min) + min)
  // }

  const [showInput, setShowInput] = useState(false);

  const handleAdd = (text) => {
    // creating lists shape
    let newLists = [
      ...lists,
      { id: nanoid(), date: new Date().toDateString(), name: text, items: [] },
    ];
    setLists(newLists);
    setShowInput(false);
  };

  const handleRemove = (id) => {
    let newLists = lists.filter((item) => item.id !== id);
    setLists(newLists);
  };

  return (
    <div className={styles.homeContainer}>
      <h3 style={{ textAlign: "center", fontSize: "18px" }}>
        {new Date().toDateString()}
      </h3>

      {!showInput && (
        <div className={styles.listSection}>
          <div className={styles.block_title}>Add Task</div>
          <div className={styles.btnContainer}>
            <button
              onClick={() => setShowInput(true)}
              className={styles.addbtn}
            >
              +
            </button>
            <span></span>
          </div>
        </div>
      )}

      {showInput && (
        <div className={styles.btn_showInput}>
          <Form
            onAddStep={handleAdd}
            placeholder="Untitled List"
            name="Add Task"
          />
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
                <img src={binIcon} alt={"bin icon"} />
              </button>
            </div>
          );
        })}
      </div>
      {/* show img only when there is no list  */}
      {lists.length < 1 && (
        <div className={styles.imgContainer}>
          <img src={taskIcon} alt="task" className={styles.img} />
        </div>
      )}
    </div>
  );
}
