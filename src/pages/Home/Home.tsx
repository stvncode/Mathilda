import { Flex } from '@mantine/core'
import { About, Contact, Following, Prices, Psychology } from 'features'
import { FC } from 'react'

export const Home: FC = () => (
  <Flex direction="column" mt={100} gap={60}>
    <div id="about" />
    <About />
    <div id="psychology" />
    <Psychology />
    <div id="following" />
    <Following />
    <div id="prices" />
    <Prices />
    <div id="contact" />
    <Contact />
  </Flex>
)
