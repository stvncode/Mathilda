import { Button, Flex } from '@mantine/core'
import { FC } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useMenuStyles } from './Menu.styles'
import { menuItems } from './Menu.utils'

export const Menu: FC = () => {
    const { classes } = useMenuStyles()

    return (
        <Flex gap={30} align="center">
            <Flex gap={20}>
                {menuItems.map((menu, i) =>
                    <HashLink key={i} to={`#${menu.link}`} className={classes.menu}>
                        {menu.title}
                    </HashLink>
                )}
            </Flex>
            <a href="https://www.doctolib.fr" target="_blank">
                <Button color="teal.5">Prendre RDV</Button>
            </a>
        </Flex>
    )
}
