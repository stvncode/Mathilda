import { Text, TextProps } from '@mantine/core'
import { FC, MouseEventHandler } from 'react'
import { useTypographyStyles } from './Typography.styles'

interface CustomTextProps extends TextProps {
    onClick?: MouseEventHandler
    indent?: boolean
    href?: string
    target?: string
    white?: boolean
}

export const CustomText: FC<CustomTextProps> = ({ children, indent, white, ...props }) => {
    const { classes, cx } = useTypographyStyles()

    const { className } = props

    return (
        <Text {...props} className={cx(indent ? classes.indent : '', white ? classes.textWhite : classes.text, className)}>
            {children}
        </Text>
    )
}