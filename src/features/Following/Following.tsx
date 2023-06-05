import { IconBoxMultiple4 } from '@tabler/icons-react'
import { following } from 'assets/img'
import { SectionCard } from 'components/Section'
import { FC } from 'react'

export const Following: FC = () =>
    <SectionCard
        bg="orange"
        bgNumber={0}
        title="Types d'accompagnement"
        icon={<IconBoxMultiple4 />}
        position='right'
        img={following}
    />