import { Flex, Image, Header as MantineHeader } from '@mantine/core'
import { Menu } from 'components/Menu'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header: FC = () => {
  const navigate = useNavigate()

  return (
    <MantineHeader height={60} pr={20} fixed>
      <Flex align="center" justify="space-between" style={{ height: '100%' }}>
        <Image src="/logo.png" width={250} height={120} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        <Menu />
      </Flex>
    </MantineHeader>
  )
}
