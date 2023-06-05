import { IconMailbox } from '@tabler/icons-react'
import { contact } from 'assets/img'
import { Map } from 'components/Map'
import { SectionCard } from 'components/Section'
import { FC } from 'react'

export const Contact: FC = () => <SectionCard
    bg="violet"
    bgNumber={0}
    title="Contact"
    children={<Map />}
    icon={<IconMailbox />}
    position='right'
    img={contact}
/>