import { Button, Flex, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconArrowRight } from '@tabler/icons-react'
import { BurgerIcon } from 'components/ActionIcon'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMenuStyles } from './Menu.styles'
import { menuItems } from './Menu.utils'

export const Menu: FC = () => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width: 900px)')

    const { classes } = useMenuStyles()

    const changeUrl = (link: string) => {
        window.location.pathname.split('/').pop()
        navigate(`/#${link}`)
    }

    return !isMobile ?
        <Flex gap={30} align="center">
            <Flex gap={20} align="center">
                {menuItems.map((menu, i) =>
                    <div key={i} onClick={() => changeUrl(menu.link)} className={classes.menu}>
                        {menu.title}
                    </div>
                )}
            </Flex>
            <MenuButton />
        </Flex> : <Flex gap={10} align="center">
            <BurgerIcon />
        </Flex>
}

const MenuButton: FC = () => <a href="https://www.doctolib.fr" target="_blank">
    <Button color="teal.0" rightIcon={<IconArrowRight size={15} style={{ color: '#000' }} />}>
        <Text color="dark">Prendre RDV</Text>
    </Button>
</a>