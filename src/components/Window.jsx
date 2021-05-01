import React from "react"
import Draggable from "react-draggable"
import { Window as MacWindow, TitleBar } from "react-desktop/macOs"

const Window = ({ height, width, title, children }) => {
  return (
    <Draggable bounds="parent" defaultPosition={{ x: 0, y: 200 }}>
      <MacWindow chrome height="200px" width="300px" padding="10px">
        <TitleBar title={title} controls />
        {children}
      </MacWindow>
    </Draggable>
  )
}

export default Window
