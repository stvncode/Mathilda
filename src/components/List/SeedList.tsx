import { Flex, List, useMantineTheme } from '@mantine/core'
import { IconSeeding } from '@tabler/icons-react'
import { CustomText } from 'components/Typography'
import { FC } from 'react'

interface SeedListProps {
    items: string[]
    color: string
    white: boolean
}

export const SeedList: FC<SeedListProps> = ({ items, color, white }) => {
    const theme = useMantineTheme()

    return (
        <Flex direction="column" gap={20} mt={20} align="flex-start">
            {items.map((item, i) => <List
                spacing="xs"
                size="sm"
                key={i}
                icon={
                    <IconSeeding color={theme.colors[`${color}`][3]} />
                }
            >
                <List.Item style={{ textAlign: 'start' }}>
                    <CustomText white={white}>{item}</CustomText>
                </List.Item>
            </List>
            )}
        </Flex>
    )
}
