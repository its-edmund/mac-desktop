import React from "react"
import {
  Box,
  Center,
  Image,
  Menu,
  MenuButton,
  Button,
  Link,
  Tooltip,
} from "@chakra-ui/react"

import launchpad from "../assets/launchpad.png"
import github from "../assets/github.png"
import settings from "../assets/settings.png"
import calculator from "../assets/calculator.png"
import terminal from "../assets/terminal.png"
import notepad from "../assets/notepad.png"
import vscode from "../assets/vscode.png"
import messages from "../assets/messages.png"

const Dock = () => {
  return (
    <Box
      position="fixed"
      mx="auto"
      bottom="10px"
      left="50%"
      transform="translateX(-50%)"
      display="inline-block"
      backgroundColor="rgba(255,255,255,0.3)"
      mt="87vh"
      borderRadius="15px"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Center p={1}>
        <Menu>
          <Tooltip hasArrow label="Launchpad" bg="rgb(60,60,60)">
            <MenuButton>
              <Image src={launchpad} width="50px" my="auto" />
            </MenuButton>
          </Tooltip>
          <Tooltip hasArrow label="GitHub" bg="rgb(60,60,60)">
            <Link href="https://github.com/mxinburritos" target="_blank">
              <Button display="contents">
                <Image src={github} width="50px" my="auto" />
              </Button>
            </Link>
          </Tooltip>
          <Tooltip hasArrow label="Messages" bg="rgb(60,60,60)">
            <MenuButton>
              <Image src={messages} width="50px" my="auto" />
            </MenuButton>
          </Tooltip>
          <Tooltip hasArrow label="Terminal" bg="rgb(60,60,60)">
            <MenuButton>
              <Image src={terminal} width="50px" my="auto" />
            </MenuButton>
          </Tooltip>
          <Tooltip hasArrow label="Notepad" bg="rgb(60,60,60)">
            <MenuButton>
              <Image src={notepad} width="50px" my="auto" />
            </MenuButton>
          </Tooltip>
          <Tooltip hasArrow label="Calculator" bg="rgb(60,60,60)">
            <MenuButton>
              <Image src={calculator} width="50px" my="auto" />
            </MenuButton>
          </Tooltip>
          <Tooltip hasArrow label="Visual Studio Code" bg="rgb(60,60,60)">
            <MenuButton>
              <Image src={vscode} width="50px" my="auto" />
            </MenuButton>
          </Tooltip>
          <Tooltip hasArrow label="System Preferences" bg="rgb(60,60,60)">
            <MenuButton>
              <Image src={settings} width="50px" my="auto" />
            </MenuButton>
          </Tooltip>
        </Menu>
      </Center>
    </Box>
  )
}

export default Dock
