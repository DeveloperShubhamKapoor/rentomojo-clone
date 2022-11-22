import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterContextProvider({ children }) {
    const [sliderValue, setSliderValue] = useState(3);
    const [category,setCategory] = useState("");
  return <FilterContext.Provider value={{sliderValue,setSliderValue,category,setCategory}}>{children}</FilterContext.Provider>;
}
