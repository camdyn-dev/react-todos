import { useState, useEffect } from "react";

function useLocalStorage(key, initVal) {
  const [state, setState] = useState(() => {
    let val;
    if (localStorage.getItem(key).length > 2) {
      //if there's more than just the two quotation marks
      val = JSON.parse(localStorage.getItem(key)); //grab it from localStorage
    } else {
      val = initVal; //otherwise, use the initial value
    }
    return val;
  });

  useEffect(() => {
    return localStorage.setItem(key, JSON.stringify(state)); //upon re-render, update the state to use the localStorage
  }, [state]);

  return [state, setState];
}
export default useLocalStorage;
