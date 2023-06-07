import { Flex, Text } from '@mantine/core'
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
                <SeedList items={pricesItems} color="dark" />
            </Flex>
            <CustomText indent mt={40}>
                Tout rendez-vous non honoré dans les 48h sera considéré comme dû.
            </CustomText>
            <CustomText indent>
                Le règlement se fait par chèque ou par espèces. Il peut se faire en plusieurs fois. Les consultations ne bénéficient pas
                d’un remboursement par l’assurance maladie. Néanmoins, certaines mutuelles peuvent proposer une prise en charge d’une partie des honoraires.
                N’hésitez pas à vous renseigner, je pourrai vous fournir une facture si tel est le cas.
            </CustomText>
        </Flex>
    )
}
