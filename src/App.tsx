import { DEFAULT_THEME, MantineProvider } from "@mantine/core"
import { Notifications } from '@mantine/notifications'
import { Layout } from "components/Layout"
import { Home } from "pages/Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export const App = () => {

  const theme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
    },
    fontFamily: 'JetBrains Mono',
  }

  return <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    <Notifications />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </MantineProvider>
}