import { createStyles } from '@mantine/core'

export const useSectionStyles = createStyles({
  swatch: {
    height: '64px',
    width: '64px',
    borderRadius: '50%',
    color: '#202023',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2rem',

    '@media screen and (max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
  element: {
    flex: 1,
    marginLeft: 'auto',
  },
  imageElement: {
    flex: 'inherit',
  },
})
