import { Box, Text } from '@chakra-ui/react';
import React from 'react';
export const TimeDisplay = ({ text }) => {
  return (
    <Box padding="0.5rem" boxShadow="0 0 2px 2px rgba(0, 0, 255, .2)">
      <Text fontSize={'2rem'} fontWeight={500}>
        {text}
      </Text>
    </Box>
  );
};
