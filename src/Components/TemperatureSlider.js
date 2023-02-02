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
import axios from 'axios';
export const TemperatureSlider = ({
  timeDelay,
  setCurrentTemperature,
  sliderValue,
  setSliderValue,
  showTooltip,
  setShowTooltip,
  round,
  tempList,
  setRound,
  setTempList,
}) => {
  const [count, setCount] = React.useState(0);
  const [steuers, setSteuers] = React.useState([-24.9]);
  const [regels, setRegels] = React.useState([12, 62.3, 103.07, 139.79]);

  const [play, { stop }] = useSound(fireHouseAlarm);
  const base_url = 'https://fificbrokenfridge.onrender.com/api';

  const getDisplayData = useCallback(() => {
    if (tempList[round]) {
      setRound(round + 1);
      setCurrentTemperature(() => {
        return tempList[round];
      });

      const body = {
        temperature: tempList[round],
        createdBy: sessionStorage.getItem('userId'),
      };
      axios.post(`${base_url}/temperatures`, body);
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
  }, [timeDelay]);

  React.useEffect(() => {
    getDisplayData();
  }, [getDisplayData]);

  React.useEffect(() => {
    //stell is the slider value
    const stoer = 170;
    const tempo = 0.1;
    const regelfaktor = 0.3;
    const v = 3;
    const new_regel = Math.round(
      regels[regels.length - 1] +
        (stoer - regels[regels.length - 1]) * tempo -
        steuers[steuers.length - 1]
    );

    setRegels([...regels, new_regel]);
    const new_steur = Math.round(
      (regels[regels.length - v] - sliderValue) * regelfaktor
    );
    setSteuers([...steuers, new_steur]);
    if (regels.slice(-1)[0] >= 120) {
      play();
    } else {
      stop();
    }
    if ( !(round === 0 && new_regel === 168)) {
      setTempList([...tempList, new_regel]);
    }
    console.log(new_regel, regels, tempList)
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
