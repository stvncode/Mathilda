import { Flex } from '@mantine/core'
import { IconBoxMultiple4 } from '@tabler/icons-react'
import { following } from 'assets/img'
import { PlusRedirect } from 'components/ActionIcon'
import { SeedList } from 'components/List'
import { SectionCard } from 'components/Section'
import { FC } from 'react'
import { followingItems } from './Following.utils'

export const Following: FC = () => {
    const color = "orange"

    return <SectionCard
        bg={color}
        bgNumber={1}
        title="Types d'accompagnements"
        icon={<IconBoxMultiple4 />}
        position='right'
        img={following}
    >
        <Flex direction="column" gap={20}>
            <SeedList white={false} items={followingItems} color={color} />
            <PlusRedirect color={color} link="following" mt={20} />
        </Flex>
    </SectionCard>
}