import { Flex, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconArrowLeft } from '@tabler/icons-react'
import { SeedList } from 'components/List'
import { CustomText } from 'components/Typography'
import { pricesItems } from 'features/Prices/Prices.utils'
import { useAboutPageStyles } from 'pages/About/AboutPage.styles'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const PricesPage: FC = () => {
    const navigate = useNavigate()

    const { classes } = useAboutPageStyles()

    const isMobile = useMediaQuery('(max-width: 600px)')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Flex direction="column" mt={140} gap={20} className={classes.container}>
            <Flex mb={30} align="center" justify="space-between">
                <IconArrowLeft onClick={() => navigate('/#prices')} color="teal" size={30} className={classes.back} />
                <Text weight="bold" size={25}>Différents tarifs</Text>
                <div />
            </Flex>
            <Flex direction="column">
                <SeedList white items={pricesItems} color="dark" />
            </Flex>
            <CustomText indent white mt={40}>
                Tout rendez-vous non honoré dans les 48h sera considéré comme dû.
            </CustomText>
            <CustomText indent white>
                Le règlement se fait par chèque ou par espèces. Les consultations ne bénéficient pas
                d’un remboursement par l’assurance maladie. Néanmoins, certaines mutuelles peuvent proposer <Text style={{ textAlign: 'start' }} mr={isMobile ? 80 : 0}> <Text span ml={isMobile ? -15 : 0}>une</Text> prise en charge d’une partie des honoraires.
                    N’hésitez pas à vous renseigner, je pourrai vous fournir une facture si tel est le cas.</Text>
            </CustomText>
        </Flex>
    )
}
