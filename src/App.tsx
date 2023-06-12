import { ColorScheme, ColorSchemeProvider, DEFAULT_THEME, MantineProvider } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { Notifications } from '@mantine/notifications'
import { Layout } from "components/Layout"
import { AboutPage, ContactPage, FollowingPage, Home, PricesPage } from "pages"
import { FC } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({ key: 'color-scheme', defaultValue: 'light' })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const theme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
    },
    colorScheme,
    white: '#FCF6F4',
    black: '#202023',
    fontFamily: 'JetBrains Mono',
  }

  return <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Notifications />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="following" element={<FollowingPage />} />
            <Route path="prices" element={<PricesPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </ColorSchemeProvider>
}