import { Box, Flex, Text } from '@mantine/core'
import { IconArrowBadgeRight } from '@tabler/icons-react'
import { FC } from 'react'

interface PagesTitleProps {
    message: string
}

export const PagesTitle: FC<PagesTitleProps> = ({ message }) => <Flex gap={15} align="center">
    <Box mt={27}>
        <IconArrowBadgeRight />
    </Box>
    <Text mt={20} align='start' weight="bold" size={19}>{message}</Text>
</Flex>
