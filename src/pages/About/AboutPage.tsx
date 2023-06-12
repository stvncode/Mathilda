import { Flex, Image, Text, useMantineTheme } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { mathilda } from 'assets/img'
import { CustomText } from 'components/Typography'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAboutPageStyles } from './AboutPage.styles'

export const AboutPage: FC = () => {
    const navigate = useNavigate()

    const theme = useMantineTheme()

    const { classes } = useAboutPageStyles()

    const tealColor = theme.colors.teal[4]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Flex direction="column" mt={100} gap={20} className={classes.container}>
            <IconArrowLeft onClick={() => navigate('/#about')} color="teal" size={30} className={classes.back} />
            <Flex gap={20} direction="column" justify="center">
                <Flex direction="column" align="center" gap={30}>
                    <Image ml={-40} src={mathilda} width={250} height={250} />
                    <Text weight="bold" mb={20} size={35}>Mathilde Bauden</Text>
                </Flex>
                <CustomText indent white>
                    Psychologue clinicienne depuis plus de 4 ans, je suis diplômée d’un Master 2 de Psychologie Clinique,
                    Psychopathologie et Psychologie de la Santé. J’ai principalement été spécialisée dans les handicaps
                    et troubles neurodéveloppementaux en travaillant dans diverses structures comme des Centres Médico-Psychologiques (CMP),
                    Services d’Éducation Spéciale et de Soins à Domicile (SESSAD) et Hôpitaux de Jour.
                </CustomText>
                <CustomText indent white>
                    Au travers de mes expériences, j’accompagne les enfants, les adolescents et leurs parents au fil de leur développement
                    et en fonction de leurs besoins. D’orientation intégrative, je perçois l’accompagnement de manière globale, en prenant
                    en compte les différentes dimensions de la personne : physique, émotionnelle, cognitive et sociale. Mon objectif est de
                    favoriser l'épanouissement de chaque individu en travaillant de manière collaborative avec eux, afin de trouver des
                    solutions adaptées et de développer leurs ressources personnelles. En mettant l'accent sur l'écoute bienveillante,
                    le respect et la confidentialité, je m'efforce de créer un environnement de confiance propice à l'exploration et
                    au changement. Ensemble, nous construirons un accompagnement sur mesure, en harmonie avec vos besoins et votre situation spécifique.
                </CustomText>
                <CustomText indent white>
                    Pour garantir un accompagnement adapté à l’enfant, je considère une collaboration étroite avec les parents comme primordiale.
                    De la même manière, lorsque l'enfant ou l’adolescent est suivi par d'autres professionnels tels que des médecins, des orthophonistes,
                    des psychomotriciens ou des ergothérapeutes, j'attache une grande importance à établir une communication et une coordination efficaces avec eux.
                    Cette approche vise à assurer la cohérence des interventions et à favoriser une prise en charge globale et harmonisée. En travaillant en équipe,
                    nous pouvons ainsi partager nos connaissances, nos observations et nos recommandations pour le bénéfice optimal de l'enfant.
                </CustomText>
                <CustomText white size={16} mt={20} indent italic>
                    Les accompagnements que je propose sont sur la base des recommandations de bonnes pratiques de la Haute Autorité de Santé (HAS).
                </CustomText>
                <CustomText white size={16} indent italic>
                    Aucune prescription médicale n’est nécessaire. Votre médecin peut vous orienter directement vers moi, ou tout autre professionnel
                    médical ou para-médical (neuropédiatre, pédopsychiatre, pédiatre, orthophoniste, psychomotricien, psychologue, etc.). De même vous
                    pouvez me solliciter directement.
                </CustomText>
                <CustomText white size={16} indent italic>
                    Le titre de psychologue est défini par la <Text span component='a' color={tealColor} href='https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000033678864'>
                        loi n°85-772 du 25 Juillet 1985 </Text>
                    publiée au Journal Officiel du 26 Juillet 1985.
                    Le numéro Adeli vous assure un accompagnement par un professionnel reconnu par ce titre et par
                    <Text span component='a' color={tealColor} href="https://www.ars.sante.fr/"> l'Agence Régional de la Santé (ARS) </Text>
                    et protège contre l’exercice illégal de la profession. De plus, le code de déontologie des psychologues, dans lequel s’inscrit ma pratique,
                    garantit les droits de la personne et le secret professionnel. Toutefois, celui-ci peut être levé lorsqu’il est jugé que le patient se
                    trouve en situation de danger.
                </CustomText>
            </Flex>
        </Flex>
    )
}

