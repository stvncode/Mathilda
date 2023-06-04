import { createStyles } from '@mantine/core'

export const useMenuStyles = createStyles({
  menu: {
    textDecoration: 'none',
    color: 'inherit',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      cursor: 'pointer',
    },
  },
})
