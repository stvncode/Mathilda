import { Button, Flex, Text } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
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
                <Button color="teal.0" rightIcon={<IconArrowRight size={15} style={{ color: '#000' }} />}>
                    <Text color="dark">Prendre RDV</Text>
                </Button>
            </a>
        </Flex>
    )
}
