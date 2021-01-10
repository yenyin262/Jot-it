import React from "react";
import styles from "./style.module.scss";
import Form from "../Form/Form";

const ListView = ({ list, items, onAddStep, onChecked, onPlay, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.slideshow}>
        <div className="textClick">Click </div>
        <button className={styles.playbtn} onClick={onPlay}>
          &#x25BA;
        </button>
        <div>for PlayView </div>
      </div>

      <div className={styles.container_reciepe}>
        <Form placeholder="add tasks" onAddStep={onAddStep} />
        <div className={styles.pageTitle}>
          <div className={styles.pageTitleContent}>{list.name} list</div>
        </div>
        {/* check receipes length if it is empty show no content */}
        {items.length > 0 ? (
          <div className={styles.listContent}>
            {items.map((el, index) => (
              <div className={styles.itemList} key={el.id}>
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
          <div className={styles.noListMessage}>No items available!</div>
        )}
      </div>
    </div>
  );
};
export default ListView;
