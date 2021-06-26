import React from "react"
import { TitleBar, Button, Text } from "react-desktop/macOs"
import { Flex, Stack } from "@chakra-ui/react"

import Window from "../Window"

const AboutWindow = () => {
  return (
    <Window title="About Me" height={200} width={300}>
      <Flex direction="column" my="auto" mx="auto">
        <Text>Hi! I'm Edmund Xin</Text>
        <Stack direction="row" mt="10px">
          <Button
            color="blue"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://github.com/mxinburritos/resume", "_blank")
            }}
          >
            Resume
          </Button>
          <Button
            color="blue"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://github.com/mxinburritos", "_blank")
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Flex>
    </Window>
  )
}

export default AboutWindow
