import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import "../../App.css";
import AllDone from "../../components/AllDone";
import ListView from "../../components/ListView/ListView";
import PlayView from "../../components/PlayView/PlayView";

import styles from "./style.module.scss";

const INITIAL = "init";
const PLAYING = "playing";
const ALL_DONE = "all-done";

// function getBgColor(index) {
//   if (3 * index + 1) {
//     // formula
//   }
// }

// prop lists passed from App.js - being the key that holds the initialState value
//  this functions finds the first object that matches ID
function getCurrentList(lists, id) {
  return lists.find((state) => {
    return state.id == id;
  });
}

// getting update of the lists
function getUpdatedLists(prevLists, newList) {
  return prevLists.map((oldList) => {
    if (oldList.id === newList.id) {
      return newList;
    }
    return oldList;
  });
}

// creating List component
function List({ lists, setLists }) {
  // for routing
  let { id } = useParams();

  const [list, index] = React.useMemo(() => {
    const idx = lists.findIndex((list) => list.id == id);
    const val = lists[idx];
    return [val, idx];
  }, [lists]);

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    setItems(!list ? [] : list.items);
  }, [list]);

  useEffect(() => {
    setLastUnchecked(items);

    if (items.length > 0) {
      setMessage(null);
    }
  }, [items]);

  // 2. create current state to pass to first page and show current
  const [current, setCurrent] = React.useState(null);

  //3. create alldone as state to show list done
  // const [allDone, setAllDone] = React.useState(false);

  //4. create play state to show second page slideshow when play btn clicked
  // const [play, setPlay] = React.useState(false);

  const [message, setMessage] = React.useState("");

  const [pageState, setPageState] = React.useState(PLAYING);

  // resetList is a function to resetList - it resets the initial state
  const resetList = () => {
    setCurrent(null);
    // setAllDone(false);
    // setPlay(false);

    setPageState(INITIAL);

    const currentList = getCurrentList(lists, list.id);

    const updateList = {
      ...currentList,
      items: currentList.items.map((item) => {
        return { ...item, checked: !item.checked };
      }),
    };

    setLists(getUpdatedLists(lists, updateList));
  };

  //4. A function to add another list
  const handleAddNewStep = (text) => {
    const currentList = getCurrentList(lists, list.id);

    const updatedList = {
      ...currentList,
      items: [
        ...currentList.items,
        { id: nanoid(), text: text, checked: false },
      ],
    };

    setLists(getUpdatedLists(lists, updatedList));
  };

  //5. A  function to delete
  const handleDelete = (index) => {
    const currentList = getCurrentList(lists, list.id);

    const updatedList = {
      ...currentList,
      items: items.filter((item, id) => id !== index),
    };
    setLists(getUpdatedLists(lists, updatedList));
  };

  //6. sets new value when checked
  const handleCheckedBox = (item, index) => {
    const currentList = getCurrentList(lists, list.id);
    const updatedList = {
      ...currentList,
      items: currentList.items.map((item, idx) => {
        if (idx !== index) {
          return item;
        }
        return { ...item, checked: !item.checked };
      }),
    };

    setLists(getUpdatedLists(lists, updatedList));
  };

  //7. A function to play as slideshow
  const handlePlay = () => {
    setLastUnchecked(items);

    if (items.length > 0) {
      // setPlay(true);
      setPageState(PLAYING);
    } else {
      setMessage(
        alert("Please add something to your list before clicking play")
      );
    }
  };

  // check if thats the last unchecked item
  // in order to reset lists and show all done!
  const setLastUnchecked = (newItems) => {
    if (items.length > 0) {
      const index = newItems.findIndex((el) => !el.checked);
      // -1 = nothing unchecked or everything checked
      if (index === -1) {
        setCurrent(null);
        setPageState(ALL_DONE);
        // setAllDone(true);
        // setPlay(false);
      } else {
        setCurrent(index);
      }
    }
  };
  if (!list) {
    return <Redirect to="/" />;
  }

  // when prop use name of prop "on"
  // when naming functions use "Handle"
  return (
    <div className="App">
      <div className={styles.showMessage}>{message}</div>

      {/* {!play && !allDone && ( */}
      {pageState === INITIAL && (
        <ListView
          // prop=value
          list={list}
          items={items}
          onAddStep={handleAddNewStep}
          onChecked={handleCheckedBox}
          onPlay={handlePlay}
          onDelete={handleDelete}
        />
      )}
      {pageState === PLAYING && current !== null && (
        // {play && current !== null && !allDone && (
        <PlayView
          onChecked={handleCheckedBox}
          el={items[current]}
          index={current}
        />
      )}

      {pageState === ALL_DONE && <AllDone onClick={resetList} />}
    </div>
  );
}

export default List;
