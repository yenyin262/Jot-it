import React from "react";
import styles from "./firstpage.module.scss";
import Form from "./Form";

const FirstPage = ({ list, items, onAddStep, onChecked, onPlay, onDelete }) => {
  // const handleRemove = () => {
  //   if (text) {
  //     onDelete(text);
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.slideshow}>
        <div class="textClick">Click </div>
        <button className={styles.playbtn} onClick={onPlay}>
          &#x25BA;
        </button>{" "}
        <div>to show your lists as a slideshow! </div>
      </div>

      <div className={styles.container_reciepe}>
        <Form label="add tasks" onAddStep={onAddStep} />
        <div className={styles.listContainer}>{list.name}'s list</div>
        {/* check receipes length if it is empty show no content */}
        {items.length > 0 ? (
          <div className={styles.listContent}>
            {items.map((el, index) => (
              <div className={styles.itemList}>
                <input
                  type="checkbox"
                  checked={el.checked}
                  onChange={() => onChecked(el, index)}
                />
                <div className={styles.listText}>{el.text}</div>
                <button className={styles.btn} onClick={() => onDelete(index)}>
                  X
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="textStyle">No lists available!</div>
        )}
      </div>
    </div>
  );
};
export default FirstPage;
