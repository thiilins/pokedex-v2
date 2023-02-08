import React from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from '@/routes'
import GlobalStyles from '@styles/global'
import theme from '@/styles/theme'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyles />
        <Routes />
      </React.StrictMode>
    </ThemeProvider>
  )
}

export default App
