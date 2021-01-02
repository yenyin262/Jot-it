const initialState = [
  {
    id: 1,
    name: "shopping List",
    items: [
      { id: 1, text: "cinnamon", checked: false },
      { id: 2, text: "ORANGE", checked: false },
    ],
  },
  {
    id: 2,
    name: "Movie",
    items: [{ id: 1, text: "What. we do in the shadows", checked: false }],
  },
];

// [
//   {
//     id: 1,
//     name: "shopping List",
//     items: [
//       { id: 1, text: "cinnamon", checked: false },
//       { id: 2, text: "ORANGE", checked: false },
//       { id: 3, text: "Sugar", checked: false },
//     ],
//   },
//   {
//     id: 2,
//     name: "Movie",
//     items: [
//       { id: 1, text: "What. we do in the shadows", checked: false },
//     ],
//   },
// ];

// const initialItems = [
//       { id: 1, text: "cinnamon", checked: false },
//       { id: 2, text: "ORANGE", checked: false },
// ];

// // [
// //       { id: 1, text: "cinnamon", checked: false },
// //       { id: 2, text: "ORANGE", checked: false },
// //       { id: 3, text: "Sugar", checked: false },
// // ];

// function updateItems(item) {

//  return  [...initialItems, item]

// }

function updateState(stateId, item) {
  // refers to an object
  let result = initialState.find((state) => {
    return state.id == stateId;
  });

  let { items } = result;

  //   let updateItem = [...items, item];
  // update object with new item
  // item being argument of the functions
  let newResult = { ...result, items: [...items, item] };

  return initialState.map((state) => {
    if (state.id !== newResult.id) {
      return state;
    }
    return newResult;
  });
}

// console.log(updateItems({ id: 3, text: "Sugar", checked: false }))
// console.log(initialItems)
console.log(initialState);
console.log(updateState(1, { id: 3, text: "Sugar", checked: false }));
