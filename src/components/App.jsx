import React from "react"
import { Box, Flex, Stack, Center } from "@chakra-ui/react"
import Draggable from "react-draggable"
import { Window, TitleBar, Text, Button } from "react-desktop/macOs"

import Dock from "./Dock"
import background from "../assets/bigsur.png"
import Toolbar from "./Toolbar"
import AboutWindow from "./windows/AboutWindow.jsx"
import ProjectWindow from "./windows/ProjectWindow.jsx"

const App = () => {
  return (
    <Box
      align="center"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <ProjectWindow />
      <AboutWindow />
      <Toolbar />
      <Dock />
    </Box>
  )
}

export default App
