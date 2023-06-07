import { Box, Flex, Image, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { about } from 'assets/img'
import { PlusRedirect } from 'components/ActionIcon'
import { FC } from 'react'
import { useAboutStyles } from './About.styles'

export const About: FC = () => {
    const { classes } = useAboutStyles()

    const isMobile = useMediaQuery('(max-width: 600px)')

    return (
        <Box className={classes.container}>
            <div className={classes.grid}>
                <Flex direction="column" justify="center" gap={30} className={classes.element}>
                    <Flex direction="column" gap={6}>
                        <Text weight="bold" mt={50} size={35}>MATHILDE BAUDEN</Text>
                        <Text weight="bold" size={18}>Psychologue clinicienne et Neuropsychologue</Text>
                    </Flex>
                    <Text p={1}>
                        Je propose des suivis psychologiques pour les enfants,
                        les adolescents et/ou leurs parents, des bilans psychométriques (QI) et/ou neuropsychologiques,
                        de la remédiation cognitive ainsi qu’un soutien à la parentalité.
                    </Text>
                    <PlusRedirect color="teal.2" link="about" mt={0} />
                </Flex>
                <Image src={about} width={isMobile ? 260 : 450} height={isMobile ? 250 : 420} className={classes.element} />
            </div>
        </Box >
    )
}
