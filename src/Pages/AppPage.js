import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { TemperatureDetails } from '../Components/TemperatureDetails';
import { TimeDetails } from '../Components/time';
import { TemperatureSlider } from '../Components/TemperatureSlider';
import { useNavigate } from 'react-router-dom';

export default function AppPage() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('10');
  const [seconds, setSeconds] = useState('00');
  const [currentTemperature, setCurrentTemperature] = useState(57);
  const [sliderValue, setSliderValue] = useState(100);
  const [showTooltip, setShowTooltip] = useState(false);
  const [round, setRound] = React.useState(0);
  const [tempList, setTempList] = React.useState([57]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
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

  const closeModal = () => {
    onClose();
    navigate('/');
  };

  return (
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
      <Modal onClose={closeModal} isOpen={isOpen} size={'lg'} isCentered>
        <ModalOverlay />
        <ModalContent padding={'2rem'}>
          <ModalHeader
            fontSize="2.4rem"
            textAlign={'center'}
            fontWeight={500}
            lineHeight={1.2}
          >
            Thank you!!!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text
              className="card-title"
              marginBottom="0.5rem"
              fontSize="1.5rem"
              textAlign={'left'}
              fontWeight={400}
              lineHeight={1}
            >
              Time is up.
            </Text>
            <Text
              className="card-title"
              marginBottom="0.5rem"
              fontSize="1.5rem"
              textAlign={'left'}
              fontWeight={400}
              lineHeight={1}
              pt='0.5rem'
            >
              Thank you for your participation!!!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={closeModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
