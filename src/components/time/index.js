import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { TimeDisplay } from './TimeDisplay';
import { TimeIcon } from '@chakra-ui/icons';
export const TimeDetails = ({ timerMinutes, hours, minutes, seconds, setHours, setMinutes, setSeconds }) => {
    const Ref = React.useRef(null);
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setHours(hours > 9 ? hours : '0' + hours)
            setMinutes(minutes > 9 ? minutes : '0' + minutes)
            setSeconds(seconds > 9 ? seconds : '0' + seconds)     
        }
    }
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setHours(0)
            setMinutes(0)
            setSeconds(0)   
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + timerMinutes*60);
        return deadline;
    }
    React.useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    
  
  return (
    <Flex margin="20px" justifyContent={'center'}>
      <Flex
        flexDirection="column"
        padding="16px"
        boxShadow="0 0 3px 3px rgba(0, 0, 255, .2)"
        width="240px"
      >
        <Box>
          <Flex justifyContent={'center'} margin="0 auto">
            <TimeIcon h={6} w={6} />
          </Flex>
          <Text textAlign={'center'}>Time remaining</Text>
        </Box>
        <Flex flexDirection="row" gap="10%">
          <Box marginTop="12px" marginLeft={'5px'}>
            <TimeDisplay text={hours} />
            <Text textAlign={'center'}>Hours</Text>
          </Box>
          <Box marginTop="12px">
            <TimeDisplay text={minutes} />
            <Text textAlign={'center'}>Mins</Text>
          </Box>
          <Box marginTop="12px">
            <TimeDisplay text={seconds} />
            <Text textAlign={'center'}>Secs</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
