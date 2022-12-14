import React, { useCallback } from 'react';
import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import useSound from 'use-sound';
import fireHouseAlarm from '../assets/fire-house-alarm-83490.mp3';
export const TemperatureSlider = ({
  timeDelay,
  outsideTemperature,
  currentTemperature,
  setCurrentTemperature,
  sliderValue,
  setSliderValue,
  showTooltip,
  setShowTooltip,
  round,
  tempList,
  setRound,
  setTempList
}) => {
  const [count, setCount] = React.useState(0);
  
  const [play, { stop }] = useSound(fireHouseAlarm);
  const getDisplayData = useCallback(() => {    
    if (tempList[round]) {
      setRound(round + 1);
      setCurrentTemperature(() => {
        if (tempList.length > 0) {
          return tempList[round] || tempList[round - 1];
        } else {
          return 57;
        }
      });
    } else {
      setCurrentTemperature(() => {
        return tempList[tempList.length - 1];
      });
    }  
  }, [count]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, timeDelay);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    getDisplayData();
  }, [count]);
  React.useEffect(() => {
    const a = 4;
    const r = 1.02719925;
    const nextVal = Math.round(a * Math.pow(r, sliderValue - 1))
    if (nextVal >= 150) {
      play();
    } else {
      stop();
    }
    setTempList([...tempList, nextVal]);
  }, [sliderValue]);
  
  const changeActualTemperature = v => {
    setSliderValue(v);
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
