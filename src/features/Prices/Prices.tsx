import { IconReportMoney } from '@tabler/icons-react'
import { prices } from 'assets/img'
import { SectionCard } from 'components/Section'
import { FC } from 'react'

export const Prices: FC = () => <SectionCard
    bg="blue"
    bgNumber={0}
    title="Prices"
    icon={<IconReportMoney />}
    position='left'
    img={prices}
/>
