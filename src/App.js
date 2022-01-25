import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";

import { FaHome } from "react-icons/fa";

const LOCALSTORAGE_KEY = "ynl-data";

function getInitialState() {
  const initialState = localStorage.getItem(LOCALSTORAGE_KEY);
  if (initialState === null) {
    return [];
  } else {
    // convert from string to JSON object
    return JSON.parse(initialState);
  }
}

// const initialState = [
//   {
//     id: 1,
//     name: "shopping List",
//     items: [
//       { id: 1, text: "cinnamon", checked: false },
//       { id: 2, text: "ORANGE", checked: false },
//     ],
//   },
// ];

export default function App() {
  const [lists, setLists] = useState(getInitialState());

  function handleSetLists(updatedLists) {
    setLists(updatedLists);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedLists));
  }

  return (
    <Router>
      <nav style={{ padding: "10px" }}>
        <Link to="/">
          <FaHome size="3em" color="black" />
        </Link>
      </nav>
      <Switch>
        <Route path="/list/:id">
          <List lists={lists} setLists={handleSetLists} />
        </Route>

        <Route exact path="/">
          <Home lists={lists} setLists={handleSetLists} />
        </Route>
      </Switch>
    </Router>
  );
}
