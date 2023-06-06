import { Flex } from '@mantine/core'
import { IconBoxMultiple4 } from '@tabler/icons-react'
import { following } from 'assets/img'
import { PlusRedirect } from 'components/ActionIcon'
import { SeedList } from 'components/List'
import { SectionCard } from 'components/Section'
import { FC } from 'react'
import { followingItems } from './Following.utils'

export const Following: FC = () => {
    const color = "teal"

    return <SectionCard
        bg={color}
        bgNumber={0}
        title="Types d'accompagnement"
        icon={<IconBoxMultiple4 />}
        position='right'
        img={following}
    >
        <Flex direction="column" gap={20}>
            <SeedList items={followingItems} color={color} />
            <PlusRedirect color={color} link="following" mt={20} />
        </Flex>
    </SectionCard>
}