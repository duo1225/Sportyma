import {Alert} from "react-native";


export const nameValidator = name => {
  if (!name || name.length <= 0) return true;

  return false;
};

export const paysValidator = pays => {
  if (!pays || pays.length <= 0) return true;

  return false;
};


