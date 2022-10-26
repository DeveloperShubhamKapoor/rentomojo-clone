import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterContextProvider({ children }) {
    const [sliderValue, setSliderValue] = useState(3);
  return <FilterContext.Provider value={{filterObjects,setFilterObjects,sliderValue,setSliderValue}}>{children}</FilterContext.Provider>;
}
