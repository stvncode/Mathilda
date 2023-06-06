import { createStyles } from '@mantine/core'

export const useMenuStyles = createStyles({
  menu: {
    fontSize: '.9rem',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      cursor: 'pointer',
    },
  },
})
