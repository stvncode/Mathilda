import { Box, Flex, Text } from '@mantine/core'
import { IconArrowBadgeRight, IconArrowBadgeRightFilled } from '@tabler/icons-react'
import { FC } from 'react'

interface PagesTitleProps {
    message: string
    subtitle?: boolean
}

export const PagesTitle: FC<PagesTitleProps> = ({ message, subtitle }) => <Flex ml={subtitle ? 25 : 0} gap={15} align="center">
    <Box mt={6}>
        {subtitle ? <IconArrowBadgeRightFilled /> : <IconArrowBadgeRight />}
    </Box>
    <Text align='center' weight="bold" size={subtitle ? 17 : 19}>{message}</Text>
</Flex>
