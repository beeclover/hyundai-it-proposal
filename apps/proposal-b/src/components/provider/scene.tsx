// /context/Modal/Provider.js
import React, { createContext, useState } from "react";

export const SceneContext = createContext({
  scene: 0,
  increment: () => { }
});

const SceneProvider = ({ children }: { children: React.ReactNode }) => {
  const [scene, setScene] = useState(1);

  const increment = () => {
    setScene(scene + 1);
  };

  return (
    <SceneContext.Provider value={{ scene, increment }}>
      {children}
    </SceneContext.Provider>
  );
};

export default SceneProvider;
