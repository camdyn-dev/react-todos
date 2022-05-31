import { useState } from "react";

const useToggle = (initValue = false) => {
  const [val, setVal] = useState(initValue);

  const toggle = () => {
    setVal(!val);
  };
  return [val, toggle];
};
export default useToggle;
