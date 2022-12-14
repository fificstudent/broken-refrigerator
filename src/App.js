import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, theme, Flex, Modal, ModalOverlay, ModalHeader, ModalFooter, ModalContent, ModalCloseButton, ModalBody, Button, Text, useDisclosure } from '@chakra-ui/react';
import { TemperatureDetails } from './components/TemperatureDetails';
import { TimeDetails } from './components/time';
import { TemperatureSlider } from './components/TemperatureSlider';

function App() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('01');
  const [seconds, setSeconds] = useState('00');
  const [currentTemperature, setCurrentTemperature] = useState(57);
  const [sliderValue, setSliderValue] = useState(100);
  const [showTooltip, setShowTooltip] = useState(false);
  const [round, setRound] = React.useState(0);
  const [tempList, setTempList] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const outsideTemperature = 48;
  const timeDelay = 5000;
  const timerMinutes = 10;

  useEffect(() => {
    if (
      hours === '00' &&
      minutes === '00' &&
      seconds === '00' &&
      round === tempList.length
    ) {
      onOpen();
    }
  }, [hours, minutes, seconds, round, tempList]);

  const closeModal = ()=>{
    onClose();
    window.location.reload();
  }
  
  return (
    <ChakraProvider theme={theme}>
      <Box background={'#FBFBFB'}>
        <Box margin="6rem auto" maxWidth={'1280px'}>
          <TimeDetails
            timerMinutes={timerMinutes}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
          />
          <Flex justifyContent={'space-around'} marginTop="8rem">
            <TemperatureDetails title="Target temperature" temp={39} />
            <TemperatureDetails
              title="Actual Temperature"
              temp={currentTemperature}
            />
          </Flex>
          <Box margin="6rem auto" maxWidth={'800px'}>
            <TemperatureSlider
              timeDelay={timeDelay}
              outsideTemperature={outsideTemperature}
              currentTemperature={currentTemperature}
              setCurrentTemperature={setCurrentTemperature}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              showTooltip={showTooltip}
              setShowTooltip={setShowTooltip}
              round={round}
              setRound={setRound}
              tempList={tempList}
              setTempList={setTempList}
            />
          </Box>
        </Box>
        <Modal onClose={closeModal} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Time is up!!!</Text>
              <Text>Thank you for your participation!!!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeModal}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
}

export default App;
