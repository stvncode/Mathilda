import { Card, ColorSwatch, DefaultMantineColor, Flex, Grid, Image, SystemProp, Text, useMantineTheme } from '@mantine/core'
import { FC, ReactNode } from 'react'
import { useSectionStyles } from './Section.styles'

interface SectionCardProps {
    title: string
    bg: SystemProp<DefaultMantineColor>
    bgNumber: number
    icon: ReactNode
    position: 'left' | 'right'
    img: string
    children?: ReactNode
}

export const SectionCard: FC<SectionCardProps> = ({ bg, bgNumber, title, icon, position, img, children }) => {
    const isLeft = position === 'left'

    const margin = isLeft ? { ml: 180, mr: 250 } : { ml: 250, mr: 180 }

    return (
        <Card radius="xl" ml={margin.ml} mr={margin.mr} bg={`${bg}.${bgNumber}`} p={40}>
            <Grid>
                <SectionImage img={img} show={!isLeft} />
                <Grid.Col span="auto">
                    <Flex align="center" direction="column" gap={20}>
                        <SectionSwatch bg={bg} bgNumber={bgNumber} icon={icon} />
                        <Text weight="bold">{title}</Text>
                        {children}
                    </Flex>
                </Grid.Col>
                <SectionImage img={img} show={isLeft} />
            </Grid>
        </Card>
    )
}

const SectionSwatch: FC<Pick<SectionCardProps, 'bg' | 'bgNumber' | 'icon'>> = ({ bg, bgNumber, icon }) => {
    const theme = useMantineTheme()

    const { classes } = useSectionStyles()

    return (
        <ColorSwatch color={theme.colors[`${bg}`][bgNumber + 1]} withShadow={false} className={classes.swatch}>
            {icon}
        </ColorSwatch>
    )
}

const SectionImage: FC<{ img: string, show: boolean }> = ({ img, show }) => show ? <Grid.Col span="auto">
    <Image src={img} alt="img" width={350} height={350} style={{ minHeight: '50px', minWidth: '100px' }} />
</Grid.Col> : null

