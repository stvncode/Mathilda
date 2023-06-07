import { createStyles } from '@mantine/core'

export const useAboutStyles = createStyles({
  container: {
    maxWidth: '60rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2rem',

    '@media screen and (max-width: 800px)': {
      flexDirection: 'column',
    },
  },
  element: {
    flex: 1,
  },
})
