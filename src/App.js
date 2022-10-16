import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
} from '@chakra-ui/react';
import { TemperatureDetails } from './components/TemperatureDetails';
import { TimeDetails } from './components/time';
import { TemperatureSlider } from './components/TemperatureSlider';


function App() {
  const [hours, setHours] = useState('01');
  const [minutes, setMinutes] = useState('03');
  const [seconds, setSeconds] = useState('05');
  const [currentTemperature, setCurrentTemperature] = useState(57);
  const [sliderValue, setSliderValue] = useState(100)
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <ChakraProvider theme={theme}>
      <Box background={'#FBFBFB'}>
        <Box margin='6rem auto' maxWidth={'1280px'}>
          <TimeDetails hours={hours}  minutes={minutes} seconds={seconds}/>
        <Flex justifyContent={'space-around'} marginTop='8rem'>
          <TemperatureDetails title = 'Target temperature' temp = {39}  />
          <TemperatureDetails title = 'Actual Temperature' temp = {currentTemperature}/>
        </Flex>
        <Box margin='6rem auto' maxWidth={'800px'}>
        <TemperatureSlider  sliderValue={sliderValue } setSliderValue={setSliderValue} showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
        </Box>
        </Box> 
      </Box>
    </ChakraProvider>
  );
}

export default App;
