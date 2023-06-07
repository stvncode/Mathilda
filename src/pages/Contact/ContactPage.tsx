import { Button, Flex, Text } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { SeedList } from 'components/List'
import { Map } from 'components/Map'
import { CustomText } from 'components/Typography'
import { contactItems } from 'features/Contact/Contact.utils'
import { useAboutPageStyles } from 'pages/About/AboutPage.styles'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ContactPage: FC = () => {
    const navigate = useNavigate()

    const { classes } = useAboutPageStyles()

    const handleOpenGoogleMaps = () => {
        const destination = encodeURIComponent('6 Rue de Jouanet, 35700 Rennes');
        const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

        // Open Google Maps in a new window or tab
        window.open(url, '_blank');
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Flex direction="column" mt={140} gap={20} className={classes.container}>
            <Flex mb={30} align="center" justify="space-between">
                <IconArrowLeft onClick={() => navigate('/#contact')} color="teal" size={30} className={classes.back} />
                <Text weight="bold" size={25}>Contact et localisation</Text>
                <div />
            </Flex>
            <Flex direction="column">
                <SeedList items={contactItems} color="dark" />
            </Flex>
            <CustomText indent mt={40}>
                Voici une carte pour vous aidez à me localiser.
            </CustomText>
            <Flex justify="center" mt={20}>
                <Map />
            </Flex>
            <Flex justify="center" mt={20}>
                <Button color='teal.4' onClick={handleOpenGoogleMaps}>Itinéraire avec google maps</Button>
            </Flex>
        </Flex>
    )
}
