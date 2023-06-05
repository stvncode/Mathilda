import { Flex, Image, Header as MantineHeader } from '@mantine/core'
import { Menu } from 'components/Menu'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <MantineHeader height={60} pr={20} fixed>
      <Flex align="center" justify="space-between" style={{ height: '100%' }}>
        <Image src="/logo.png" width={250} height={120} />
        <Menu />
      </Flex>
    </MantineHeader>
  )
}
