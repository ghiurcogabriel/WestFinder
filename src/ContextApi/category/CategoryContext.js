import { createContext, useReducer } from "react";

export const CategoryContext = createContext();

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export const CategoryProvider = ({ children }) => {
  const initialState = {
    category: "mens",
  };

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const changeCategory = (cat) => {
    dispatch({ type: "CHANGE_CATEGORY", payload: cat });
  };

  return (
    <CategoryContext.Provider value={{ ...state, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
