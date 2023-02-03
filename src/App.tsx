import React from 'react'
import { ThemeProvider } from '@contexts/ThemeContext'
import Routes from '@/routes'
import GlobalStyles from '@styles/global'
import ToastContainer from '@components/ToastContainer'

function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <GlobalStyles />
        <ToastContainer />
        <Routes />
      </React.StrictMode>
    </ThemeProvider>
  )
}

export default App
