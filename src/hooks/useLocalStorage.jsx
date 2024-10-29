import React from "react";

export const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
