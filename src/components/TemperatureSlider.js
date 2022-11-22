import React from 'react';
import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
export const TemperatureSlider = ({
  timeDelay,
  outsideTemperature,
  currentTemperature,
  setCurrentTemperature,
  sliderValue,
  setSliderValue,
  showTooltip,
  setShowTooltip,
}) => {
  const [count, setCount] = React.useState(0);
  const [tempList, setTempList] = React.useState([]);

 
  React.useEffect(() => {
    if (count !== 0 ){
        setTimeout(() => {
          setCurrentTemperature(
            currentTemperature => {
              const a = 4;
              const r = 1.02719925;

            return Math.round(a* Math.pow(r, sliderValue - 1))
          }
          );

        }, 1000);
    }
  }, [count]);
  
  const changeActualTemperature = v => {
    setSliderValue(v);
    setCount(count + 1);
  };
 
  return (
    <Slider
      id="slider"
      defaultValue={100}
      min={0}
      max={200}
      colorScheme="teal"
      onChange={v => changeActualTemperature(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      marginTop="6rem"
      maxWidth="calc(1280px - 8rem)"
      
    >
      <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
        0
      </SliderMark>
      <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
        50
      </SliderMark>
      <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
        100
      </SliderMark>
      <SliderMark value={150} mt="1" ml="-2.5" fontSize="sm">
        150
      </SliderMark>
      <SliderMark value={200} mt="1" ml="-2.5" fontSize="sm">
        200
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};
