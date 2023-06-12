import { createStyles } from '@mantine/core'

export const useTypographyStyles = createStyles((theme) => ({
  underlineOffset: {
    textUnderlineOffset: '0.2em',
    textDecoration: 'underline',
  },
  text: {
    color: '#000',
  },
  textWhite: {
    color: theme.colorScheme === 'dark' ? '#fff' : '#000',
  },
  indent: {
    textAlign: 'justify',
    textIndent: '1em',
  },
}))
