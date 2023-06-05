import { IconBrain } from '@tabler/icons-react'
import { psychology } from 'assets/img'
import { SectionCard } from 'components/Section'
import { FC } from 'react'

export const Psychology: FC = () =>
    <SectionCard
        bg="teal"
        bgNumber={0}
        title="Psycologie"
        icon={<IconBrain />}
        position='left'
        img={psychology}
    />

