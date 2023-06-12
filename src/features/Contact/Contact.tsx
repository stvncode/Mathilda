import { Flex } from '@mantine/core'
import { IconMailbox } from '@tabler/icons-react'
import { contact } from 'assets/img'
import { PlusRedirect } from 'components/ActionIcon'
import { SeedList } from 'components/List'
import { SectionCard } from 'components/Section'
import { FC } from 'react'
import { contactItems } from './Contact.utils'

export const Contact: FC = () => {
    const color = 'blue'

    return <SectionCard
        bg={color}
        bgNumber={1}
        title="Contact"
        icon={<IconMailbox />}
        position='right'
        img={contact}
    >
        <Flex direction="column">
            <SeedList white={false} items={contactItems} color={color} />
            <PlusRedirect color={color} link="contact" mt={30} />
        </Flex>
    </SectionCard>
}