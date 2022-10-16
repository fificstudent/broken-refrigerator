import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { TimeDisplay } from './TimeDisplay';
import { TimeIcon } from '@chakra-ui/icons';
export const TimeDetails = ({ hours, minutes, seconds }) => {
  
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
