import React from 'react';
import { Box } from '@chakra-ui/react';

import Dock from './Dock';
import background from '../assets/bigsur.png';
import Toolbar from './Toolbar';

const App = () => {
  return (
    <Box align='center' style={{width: '100%', height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover', overflow: 'hidden'}}>
      <Toolbar />
      <Dock />
    </Box>
  );
};

export default App;