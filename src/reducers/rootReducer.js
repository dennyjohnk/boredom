const initState = {
  posts: [
    { id: 1, title: "The hen laid an egg", body: "this is a test post" },
    { id: 2, title: "The fish laid an egg", body: "this is a test post" },
    { id: 3, title: "The parrot laid an egg", body: "this is a test post" }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
