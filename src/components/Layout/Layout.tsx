import { Flex, Text } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { useLayoutStyles } from './Layout.styles'

export const Layout: FC = () => {
    const { classes } = useLayoutStyles()

    return (
        <Flex direction="column" className={classes.container}>
            <Header />
            <Flex direction="column" className={classes.outlet} gap={40}>
                <Outlet />
            </Flex>
            <Text mt={30} mb={20} color="gray.6" align='center'>2023 Steven Travers. All Rights Reserved.</Text>
        </Flex>
    )
}
