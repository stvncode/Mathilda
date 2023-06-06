import { DEFAULT_THEME, MantineProvider } from "@mantine/core"
import { Notifications } from '@mantine/notifications'
import { Layout } from "components/Layout"
import { AboutPage, ContactPage, FollowingPage, Home, PricesPage } from "pages"
import { FC } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export const App: FC = () => {

  const theme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
    },
    white: '#FCF6F4',
    fontFamily: 'JetBrains Mono',
  }

  return <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
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
}