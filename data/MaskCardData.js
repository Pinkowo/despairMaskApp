import React, { createContext, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

import maskJson from "../json/mask.json";
const MASK_PERSISTENCE_KEY = "MASK_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {
  const [mask, setMask] = useState(maskJson);
  const store = {
    maskState: [mask, setMask],
  };

  const restoreState = async () => {
    try {
      const hasSetString = await AsyncStorage.getItem(HAS_SET_KEY);
      const hasSet = JSON.parse(hasSetString);
      if (hasSet) {
        const maskString = await AsyncStorage.getItem(MASK_PERSISTENCE_KEY);
        const state_mask = JSON.parse(maskString);
        setMask(state_mask);
      }
    } catch (e) {}
  };

  useEffect(() => {
    restoreState();
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};