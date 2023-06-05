import { Box, Flex, Grid, Image, Text } from '@mantine/core'
import { about } from 'assets/img'
import { FC } from 'react'
import { useAboutStyles } from './About.styles'

export const About: FC = () => {
    const { classes } = useAboutStyles()

    return (
        <Box className={classes.container}>
            <Grid gutter={60} align='flex-start'>
                <Grid.Col span={6}>
                    <Flex direction="column" gap={30}>
                        <Text weight="bold" mt={80} size={35}>MATHILDE BAUDEN</Text>
                        <Text weight="bold" size={18}>Lorem ipsum dolor sit</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque tempus eget justo eu euismod. Integer aliquam arcu libero,
                            id malesuada lacus tincidunt sed.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Image src={about} width={450} height={420} />
                </Grid.Col>
            </Grid>
        </Box>
    )
}
