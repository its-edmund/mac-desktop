import React from "react"
import { Text } from "react-desktop/macOs"

import Window from "../Window.jsx"

const ProjectWindow = () => {
  return (
    <Window title="My Projects" height={200} width={300}>
      <Text>Here are my projects</Text>
    </Window>
  )
}

export default ProjectWindow
