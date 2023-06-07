import { createStyles } from '@mantine/core'

export const useSectionStyles = createStyles({
  swatch: {
    height: '64px',
    width: '64px',
    borderRadius: '50%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2rem',

    '@media screen and (max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
  element: {
    flex: 1,
  },
})
