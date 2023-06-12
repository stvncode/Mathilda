import { ActionIcon, Flex, Menu, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconArrowRight, IconMenu2 } from '@tabler/icons-react'
import { menuItems } from 'components/Menu/Menu.utils'
import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

export const BurgerIcon: FC = () => {
    const navigate = useNavigate()

    const isMobile = useMediaQuery('(max-width: 900px)')

    const changeUrl = (link: string) => {
        window.location.pathname.split('/').pop()
        navigate(`/#${link}`)
    }

    return isMobile ? (
        <Menu width={200} shadow="md">
            <Menu.Target>
                <ActionIcon variant="outline">
                    <IconMenu2 size={18} />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Menu</Menu.Label>
                {menuItems.map((item, i) => (
                    <Menu.Item key={i} onClick={() => changeUrl(item.link)}>
                        {item.title}
                    </Menu.Item>
                ))}
                <Menu.Item bg="teal.0">
                    <a href="https://www.doctolib.fr" target="_blank" style={{ textDecoration: 'none' }}>
                        <Flex align="center" gap={15}>
                            <Text color="dark">Prendre RDV</Text>
                            <IconArrowRight size={15} color="#000" />
                        </Flex>
                    </a>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ) : null
}