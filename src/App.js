import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box background={'#FBFBFB'}>
        <AppRoutes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
