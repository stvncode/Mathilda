import { Flex, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconArrowLeft } from '@tabler/icons-react'
import { CustomText, PagesTitle } from 'components/Typography'
import { useAboutPageStyles } from 'pages/About/AboutPage.styles'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const FollowingPage: FC = () => {
    const navigate = useNavigate()

    const { classes } = useAboutPageStyles()

    const seven = useMediaQuery('(max-width: 700px)')
    const six = useMediaQuery('(max-width: 600px)')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Flex direction="column" mt={140} gap={20} className={classes.container}>
            <Flex mb={30} align="center" justify="space-between">
                <IconArrowLeft onClick={() => navigate('/#following')} color="teal" size={30} className={classes.back} />
                <Text weight="bold" size={25}>Les types d’accompagnements</Text>
                <div />
            </Flex>
            <PagesTitle message="Suivis psychologiques" />
            <PagesTitle subtitle message="Avec les enfants" />
            <CustomText indent>
                Lorsque l’enfant se construit, il peut lui être difficile d’exprimer ses ressentis et il peut adopter des comportements difficiles à
                vivre au quotidien, aussi bien pour lui que pour la famille. Certains enfants ont besoin d’un peu d’aide pour être rassurés, pour appréhender
                leurs émotions, mettre des mots sur des situations difficiles pour eux.
            </CustomText>
            <CustomText indent>
                Quelques motifs de consultation : difficultés de séparation, troubles du sommeil, de l’alimentation, de l’acquisition de la propreté,
                crises de colère, intolérance à la frustration, jalousies au sein de la fratrie, difficultés à se faire des amis, difficultés des apprentissages,
                harcèlement, etc.
            </CustomText>
            <CustomText indent>
                Je propose un lieu d’expression de soi où l’enfant est libre de choisir ses propres modalités (parole, jeux, dessins, etc.).
                La première consultation se fait, dans la mesure du possible, en présence de l’enfant et de ses deux parents. Ce temps d’échanges est
                l’occasion de recueillir vos inquiétudes, attentes et votre demande ainsi que tous les éléments nécessaires à la compréhension de la situation.
                Les séances suivantes se déroulent en individuel avec l’enfant et des échanges avec la famille seront prévus en début et/ou en fin de séance.
                Les informations confiées par l’enfant ne vous seront délivrées qu’avec son accord préalable sauf s’il semble se trouver en situation de danger.
            </CustomText>
            <PagesTitle subtitle message="Avec les adolescents" />
            <CustomText indent>
                La période de l’adolescence peut également amener son lot de difficultés et d’anxiété, aussi bien pour le jeune que pour ses parents et sa fratrie.
                Il s’agit d’un bouleversement de la construction du soi qui peut être complexe à appréhender. Le besoin d’autonomie et d’individuation amène l’adolescent
                à s’éloigner de la cellule familiale et faire ses propres expériences.
            </CustomText>
            <CustomText indent>
                Quelques motifs de consultation : angoisses, troubles du sommeil, harcèlement, recherche identitaire, mise en danger, phobies scolaires, repli sur soi,
                stress, etc.
                J’accompagne également l’adolescent avec haut potentiel intellectuel, trouble de l’attention, trisomie 21, autisme ou troubles des apprentissages dans
                l’appréhension de ses particularités dans un contexte d’adolescence.
            </CustomText>
            <CustomText indent>
                La première consultation peut se faire en individuel s’il s’agit de la demande du jeune ou bien en présence des deux parents, dans la mesure du possible.
                Cette première rencontre sera l’occasion de recueillir les motifs d’inquiétudes, les attentes ainsi que l’ensemble des éléments nécessaires à la
                compréhension de la situation. Les informations confiées par l’adolescent au sein des séances ne seront délivrées qu’avec son accord préalable sauf
                s’il se semble se trouver en situation de danger.
            </CustomText>
            <CustomText indent>
                Ces suivis individuels peuvent être associés à des suivis individuels de soutien à la parentalité.
            </CustomText>
            <PagesTitle message="Bilans psychométriques et neuropsychologiques " />
            <CustomText indent>
                Il existe plusieurs raisons qui pourraient vous amener à envisager de faire passer un bilan psychométrique à votre enfant ou votre adolescent comme
                des difficultés scolaires ou des préoccupations concernant leur développement (retard de la langage, problèmes de coordination, difficultés de
                socialisation, comportements atypiques).
            </CustomText>
            <CustomText indent>
                L’évaluation psychométrique (QI) et/ou neuropsychologique permet de mieux comprendre l’origine des difficultés rencontrées par votre enfant ou
                votre adolescent, tout en identifiant les ressources sur lesquelles il est possible de s’appuyer. Ces évaluations sont également utiles pour
                recommander des accompagnements spécifiques comme des adaptations à mettre en place au domicile ou en milieu scolaire, de la remédiation cognitive
                ou un suivi en psychologique.
            </CustomText>
            <CustomText indent>
                Un premier rendez-vous est proposé, en présence de l’enfant ou adolescent et de ses deux parents, dans la mesure du possible. L’objectif sera de
                comprendre votre demande et ainsi cibler les évaluations nécessaires et adaptées à ses besoins. Le nombre de séances et la durée de celles-ci sera
                déterminée en amont.
                Une fois l’évaluation réalisée et après un temps d’analyse et de rédaction, je vous reçois en présence de l’enfant ou de l’adolescent pour vous
                restituer les résultats et mes conclusions. Une copie du compte-rendu vous sera remise à l’issue de ce rendez-vous.
            </CustomText>
            <CustomText indent>
                Un suivi individuel pourra vous être proposé (suivi psychologique, remédiation cognitive, soutien à la parentalité) si vous le souhaitez.
            </CustomText>
            <PagesTitle message="Remédiation cognitive" />
            <CustomText indent>
                Suite à la réalisation d’un bilan psychométrique ou neuropsychologique, il peut vous être proposé des séances de remédiation cognitive.
                La remédiation cognitive vient soutenir le développement de l’enfant en favorisant la mise en place des stratégies compensatoires lui
                permettant de reprendre confiance en lui.
            </CustomText>
            <CustomText indent>
                Les séances durent en moyenne 45 minutes. Des exercices et des jeux adaptés aux besoins de votre enfant lui sont proposés afin de travailler
                les fonctions cognitives fragilisées (l’attention, le langage, la mémoire, les fonctions exécutives ou encore les compétences visuo-spatiales).
            </CustomText>
            <PagesTitle message="Soutien à la parentalité" />
            <CustomText indent mr={six ? 0 : seven ? 110 : 220}>
                La parentalité nécessite des ajustements à chaque étape du développement de l’enfant et des événements de vie. Elle implique des remises en question,
                des périodes de doutes qui peuvent venir remettre en jeu des dynamiques, réactions ou ressentis de l’enfance.
                Je suis également formée pour vous accompagner dans votre posture parentale et votre vécu suite à l’annonce d’un diagnostic chez votre enfant
                (autisme, troubles attentionnels, haut potentiel intellectuel, trisomie 21, etc.).
            </CustomText>
            <CustomText indent mr={six ? 0 : seven ? 30 : 160}>
                Je propose un espace d’écoute et de parole qui vous est propre afin de vous accompagner, vous soutenir ainsi que favoriser la relation avec votre enfant.
                Des séances peuvent être réalisées en présence de votre enfant, en fonction de la situation et de la demande. Ensemble, nous pourrons créer et mettre en
                place des stratégies afin d’adapter et mieux vivre votre quotidien.
            </CustomText>
        </Flex>
    )
}
