import React from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';

const Settings = () => {
  return (
    <Window
      chrome
      height="300px"
      padding="10px"
    >
      <TitleBar title="untitled text 5" controls/>
      <Text>Hello World</Text>
    </Window>
  );
};

export default Settings;