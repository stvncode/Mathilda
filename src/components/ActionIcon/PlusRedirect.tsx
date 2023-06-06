import { ActionIcon, DefaultMantineColor, Flex } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    color: DefaultMantineColor
    link: 'about' | 'following' | 'contact' | 'prices'
    mt: number
}

export const PlusRedirect: FC<Props> = ({ color, link, mt }) => {
    const navigate = useNavigate()

    return (
        <Flex justify="center" mt={mt}>
            <ActionIcon color={color} size="xl" radius="xl" variant="filled" onClick={() => navigate(link)}>
                <IconPlus />
            </ActionIcon>
        </Flex>
    )
}
