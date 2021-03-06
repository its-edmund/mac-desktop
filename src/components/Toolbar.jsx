import { Box, Stack } from '@chakra-ui/layout';
import { Menu, MenuButton } from '@chakra-ui/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Toolbar = () => {
  return (
    <Box backgroundColor='rgba(255,255,255,0.3)' style={{backdropFilter: 'blur(10px)'}}>
      <Stack direction='row' spacing={5} ml={5}>
        <Menu>
          <MenuButton><FontAwesomeIcon icon={faApple}/></MenuButton>
          <MenuButton fontWeight='bold'>Finder</MenuButton>
          <MenuButton>File</MenuButton>
          <MenuButton>Edit</MenuButton>
          <MenuButton>View</MenuButton>
          <MenuButton>Go</MenuButton>
          <MenuButton>Window</MenuButton>
          <MenuButton>Help</MenuButton>
        </Menu>
      </Stack>
    </Box>
  );
};

export default Toolbar;