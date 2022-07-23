import { createContext, useState } from "react";

export const FilterContext = createContext();

const initData = {
  smartphones: {
    name: "smartphones",
    isChecked: false,
  },
  smartdevices: {
    name: "smartdevices",
    isChecked: false,
  },
  laptops: {
    name: "laptops",
    isChecked: false,
  },
  tablets: {
    name: "tablets",
    isChecked: false,
  },
};
export function FilterContextProvider({ children }) {
   const [filterObjects,setFilterObjects] = useState(initData)
    const [sliderValue, setSliderValue] = useState(3);
  return <FilterContext.Provider value={{filterObjects,setFilterObjects,sliderValue,setSliderValue}}>{children}</FilterContext.Provider>;
}
