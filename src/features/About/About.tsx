import { Flex, Image, Text } from '@mantine/core'
import { FC } from 'react'
import { useAboutStyles } from './About.styles'

export const About: FC = () => {
    const { classes } = useAboutStyles()

    return (
        <Flex justify="space-between" className={classes.container}>
            <Text weight="bold" size={30}>MATHILDE BAUDEN</Text>
            <Image src="/about.jpg" width={450} height={420} />
        </Flex>
    )
}
