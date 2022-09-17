import React, { useContext } from "react";
import {FilterContext} from "../context/FilterContext"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";
import styles from "../styles/smartphones.module.css"

const SliderComp = () => {
  const {sliderValue,setSliderValue} = useContext(FilterContext);
    // const [sliderValue, setSliderValue] = React.useState(3);
    const [showTooltip, setShowTooltip] = React.useState(false);
    return (
      <div className={styles.slider_container}>
        <Slider size={"md"} step={3}
          id="slider"
          defaultValue={3}
          min={3}
          max={6}
          colorScheme="red"
          onChange={(v) => setSliderValue(v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <SliderMark value={3} mt="1" ml="-2.5" fontSize="sm">
            3+
          </SliderMark>
          <SliderMark value={6} mt="1" ml="-2.5" fontSize="sm">
            6+
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="red.500"
            color="white"
            placement="top"
            isOpen={showTooltip}
            label={`${sliderValue}`}
          >
            <SliderThumb size="md" style={{border:"2px solid red"}} />
          </Tooltip>
        </Slider>
      </div>
    );
};

export default SliderComp;
