import { useState } from "react";

//Dummy state to force update programatically
export const useForceUpdate = () => {
  const [forceUpdate, setForceUpdate] = useState(false);
  return { forceUpdate, setForceUpdate };
};
