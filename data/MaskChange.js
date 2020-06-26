import React, { useContext, useEffect } from "react";
import { ScrollView, Text, AsyncStorage } from "react-native";
import { Input } from "react-native-elements";
import { StoreContext } from "./MaskCardData";
const MASK_PERSISTENCE_KEY = "MASK_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

// Make a component
const MaskChange = ({ navigation }) => {
  const { maskState } = useContext(StoreContext);
  const [mask, setMask] = maskState;

  const saveToAsyncStorage = () => {
    try {
      AsyncStorage.setItem(MASK_PERSISTENCE_KEY, JSON.stringify(mask));
      AsyncStorage.setItem(HAS_SET_KEY, JSON.stringify(true));
    } catch (error) {
      // Error saving data
    }
  };

  useEffect(() => {
    saveToAsyncStorage();
  }, [mask]);

  return (
    <ScrollView style={{ paddingTop: 44 }}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        User Info Setting
      </Text>
      <Input
        labelStyle={{ marginTop: 20 }}
        label="Name"
        placeholder="我"
        value={mask.name}
        onChangeText={(name) => setmask({ ...mask, name })}
      />
      <Input
        labelStyle={{ marginTop: 20 }}
        label="DaysLeft"
        placeholder="12"
        value={mask.daysLeft}
        onChangeText={(daysLeft) => setmask({ ...mask, daysLeft })}
      />
    </ScrollView>
  );
};

export default MaskChange;