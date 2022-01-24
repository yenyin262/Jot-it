import React from "react";
import styles from "./style.module.scss";
import Form from "../Form/Form";
import binIcon from "../../assets/bin.svg";
// test ListView renders component with no items
// test ListView renders component with  items
// test onAddStep prop called with correct text attribute
// onPlay = test that it was called once
//  onChecked is called with two attributes(el, index)
// onDelete is called with correct attribute (index)

const ListView = ({ list, items, onAddStep, onChecked, onPlay, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <span style={{ fontSize: "12px" }}>Date Added:</span>
        <h5>{list.date}</h5>
      </div>
      <div className={styles.slideshow}>
        <div className="textClick">Click </div>
        <button className={styles.playbtn} onClick={onPlay}>
          &#x25BA;
        </button>
        <div>for PlayView </div>
      </div>
      <div className={styles.container_reciepe}>
        <Form
          placeholder={`add to ${list.name} list`}
          onAddStep={onAddStep}
          name={"Add Subtask"}
        />
        <div className={styles.pageTitle}>
          {/*  try to change color list.name via props */}
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
                  <img src={binIcon} alt={"bin icon"} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noListMessage}>
            No items on {list.name} list
          </div>
        )}
      </div>
    </div>
  );
};
export default ListView;
