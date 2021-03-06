import React, {useEffect, useState} from 'react';
import { Box, Stack, Divider, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { Spacer } from '@chakra-ui/layout';

const getClock = () => {
  const two = (x) => x < 10 ? `0${x}` : x;
  const date = new Date();
  const D = date.getDay();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const M = date.getMonth();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const H = date.getHours();
  const m = date.getMinutes();
  const hh = H % 12 || 12;
  const mm = two(m);
  const A = ['AM', 'PM'][H / 12 | 0];
  return `${days[D]} ${months[M]} ${hh}:${mm} ${A}`;
};

const Toolbar = () => {
  const [time, setTime] = useState(getClock());

  useEffect(() => {
    const interval = window.setInterval(() => {
      const clock = getClock();
      setTime(clock);
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <Box backgroundColor='rgba(255,255,255,0.3)' style={{backdropFilter: 'blur(10px)'}}>
      <Stack direction='row' spacing={5} ml={5}>
        <Menu>
          <MenuButton><FontAwesomeIcon icon={faApple}/></MenuButton>
          <MenuList backgroundColor='rgba(255,255,255,0.3)' ml={-8} mt={-1} border='none'>
            <MenuItem>About This Mac</MenuItem>
            <MenuItem>System Preferences</MenuItem>
            <Divider orientation="horizontal" w='90%' color='rgba(0,0,0,0.3)' />
            <MenuItem>Sleep</MenuItem>
            <MenuItem>Restart...</MenuItem>
            <MenuItem>Shut Down...</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton fontWeight='bold'>Finder</MenuButton>
          <MenuButton>File</MenuButton>
          <MenuButton>Edit</MenuButton>
          <MenuButton>View</MenuButton>
          <MenuButton>Go</MenuButton>
          <MenuButton>Window</MenuButton>
          <MenuButton>Help</MenuButton>
        </Menu>
        <Spacer />
        <Text mr={5}>{time}</Text>
      </Stack>
    </Box>
  );
};

export default Toolbar;