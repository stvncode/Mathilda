import { Card, ColorSwatch, DefaultMantineColor, Flex, Image, SystemProp, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { CustomText } from 'components/Typography'
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
    const { classes } = useSectionStyles()
    const thousand = useMediaQuery('(max-width: 1072px)')
    const eight = useMediaQuery('(max-width: 640px)')

    const isLeft = position === 'left'


    const small = eight ? 0 : thousand ? 90 : 180
    const bigger = eight ? 0 : thousand ? 125 : 250

    const margin = isLeft ? { ml: small, mr: bigger } : { ml: bigger, mr: small }

    return (
        <Card radius="xl" ml={margin.ml} mr={margin.mr} bg={`${bg}.${bgNumber}`} p={40}>
            <div className={classes.container}>
                {!eight && <SectionImage img={img} show={!isLeft} />}
                <Flex className={classes.element} align="center" direction="column" gap={20}>
                    <SectionSwatch bg={bg} bgNumber={bgNumber} icon={icon} />
                    <CustomText weight="bold" size={18}>{title}</CustomText>
                    {children}
                </Flex>
                {!eight && <SectionImage img={img} show={isLeft} />}
            </div>
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

const SectionImage: FC<{ img: string, show: boolean }> = ({ img, show }) => {
    const { classes } = useSectionStyles()

    return show ?
        <Image fit='contain' src={img} alt="img" width={400} height={300} className={classes.imageElement} />
        : null
}
