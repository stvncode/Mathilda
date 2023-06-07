import { BackgroundImage, Flex } from '@mantine/core'
import { backgroundImage } from 'assets/img'
import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { useLayoutStyles } from './Layout.styles'

export const Layout: FC = () => {
    const { classes } = useLayoutStyles()

    const { pathname } = useLocation()

    const isRoot = pathname === '/'

    return (
        <Flex direction="column" className={classes.container}>
            <Header />
            {isRoot ?
                <>
                    <Flex direction="column" className={classes.outlet}>
                        <Outlet />
                    </Flex>
                    <Footer />
                </>
                :
                <BackgroundImage src={backgroundImage} style={{ minHeight: '100vh' }}>
                    <div className={classes.outlet}>
                        <Outlet />
                    </div>
                    <Footer />
                </BackgroundImage>
            }
        </Flex>
    )
}
