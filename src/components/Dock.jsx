import React from 'react';
import { Box, Center, Image, Menu, MenuButton } from '@chakra-ui/react';

import launchpad from '../assets/launchpad.png';
import settings from '../assets/settings.png';
import calculator from '../assets/calculator.png';
import terminal from '../assets/terminal.png';
import notepad from '../assets/notepad.png';
import vscode from '../assets/vscode.png';
import messages from '../assets/messages.png';

const Dock = () => {
  return (
    <Box fixed mx='auto' bottom='0px' display='inline-block' backgroundColor='rgba(255,255,255,0.3)' mt='87vh' borderRadius='15px' style={{backdropFilter: 'blur(10px)'}}>
      <Center p={1}>
        <Menu>
          <MenuButton><Image src={launchpad} width='50px' my='auto'/></MenuButton>
          <MenuButton><Image src={messages} width='50px' my='auto'/></MenuButton>
          <MenuButton><Image src={terminal} width='50px' my='auto'/></MenuButton>
          <MenuButton><Image src={notepad} width='50px' my='auto'/></MenuButton>
          <MenuButton><Image src={calculator} width='50px' my='auto'/></MenuButton>
          <MenuButton><Image src={vscode} width='50px' my='auto'/></MenuButton>
          <MenuButton><Image src={settings} width='50px' my='auto'/></MenuButton>
        </Menu>
      </Center>
    </Box>
  );
};

export default Dock;