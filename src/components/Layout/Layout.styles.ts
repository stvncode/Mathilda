import { createStyles } from '@mantine/core'

export const useLayoutStyles = createStyles({
  container: {
    minHeight: '100vh',
  },
  outlet: {
    flex: 1,
    minHeight: 'calc(100vh - 15rem)',
  },
})
