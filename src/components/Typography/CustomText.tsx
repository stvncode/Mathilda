import { Text, TextProps } from '@mantine/core'
import { FC, MouseEventHandler } from 'react'
import { useTypographyStyles } from './Typography.styles'

interface CustomTextProps extends TextProps {
    onClick?: MouseEventHandler
    indent?: boolean
    href?: string
    target?: string
}

export const CustomText: FC<CustomTextProps> = ({ children, indent, ...props }) => {
    const { classes, cx } = useTypographyStyles()

    const { className } = props

    return (
        <Text {...props} className={cx(classes.text, indent ? classes.indent : '', className)}>
            {children}
        </Text>
    )
}