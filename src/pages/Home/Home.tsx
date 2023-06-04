import { Flex } from '@mantine/core'
import { About } from 'features'
import { FC } from 'react'

export const Home: FC = () => {
  return (
    <Flex direction="column" mt={40}>
      <div id="#about">
        <About />
      </div>
    </Flex>
  )
}
