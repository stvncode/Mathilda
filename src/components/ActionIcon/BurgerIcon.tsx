import { ActionIcon, Menu } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'
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
            </Menu.Dropdown>
        </Menu>
    ) : null
}