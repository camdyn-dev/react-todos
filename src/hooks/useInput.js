import { useState } from "react";

function useInput(initValue) {
  const [val, setVal] = useState(initValue);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const reset = () => {
    setVal("");
  };

  return [val, handleChange, reset];
}

export default useInput;
