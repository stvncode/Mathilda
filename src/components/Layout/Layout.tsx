import { Flex, Text } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => {
  return (
      <Flex direction="column">
          {/* <Header /> */}
          <Flex direction="column" gap={40}>
              <Outlet />
          </Flex>
          <Text mt={50} mb={30} color="gray.6" align='center'>2023 Steven Travers. All Rights Reserved.</Text>
      </Flex>
  )
}
