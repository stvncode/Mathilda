import { Flex } from '@mantine/core'
import { IconReportMoney } from '@tabler/icons-react'
import { prices } from 'assets/img'
import { PlusRedirect } from 'components/ActionIcon'
import { SeedList } from 'components/List'
import { SectionCard } from 'components/Section'
import { FC } from 'react'
import { pricesItems } from './Prices.utils'

export const Prices: FC = () => {
    const color = 'orange'

    return <SectionCard
        bg={color}
        bgNumber={1}
        title="Tarifs"
        icon={<IconReportMoney />}
        position='left'
        img={prices}
    >
        <Flex direction="column">
            <SeedList items={pricesItems} color={color} />
            <PlusRedirect color={color} link="prices" mt={30} />
        </Flex>
    </SectionCard>
}