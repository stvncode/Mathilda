import { Box, Flex, Grid, Image, Text } from '@mantine/core'
import { about } from 'assets/img'
import { PlusRedirect } from 'components/ActionIcon'
import { FC } from 'react'
import { useAboutStyles } from './About.styles'

export const About: FC = () => {
    const { classes } = useAboutStyles()

    return (
        <Box className={classes.container}>
            <Grid gutter={60} align='flex-start'>
                <Grid.Col span={6}>
                    <Flex direction="column" gap={30}>
                        <Flex direction="column" gap={6}>
                            <Text weight="bold" mt={50} size={35}>MATHILDE BAUDEN</Text>
                            <Text weight="bold" size={18}>Psychologue clinicienne et Neuropsychologue</Text>
                        </Flex>
                        <Text>
                            Je propose des suivis psychologiques pour les enfants,
                            les adolescents et/ou leurs parents, des bilans psychométriques (QI) et/ou neuropsychologiques,
                            de la remédiation cognitive ainsi qu’un soutien à la parentalité.
                        </Text>
                        <PlusRedirect color="teal.2" link="about" mt={0} />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Image src={about} width={450} height={420} />
                </Grid.Col>
            </Grid>
        </Box>
    )
}
