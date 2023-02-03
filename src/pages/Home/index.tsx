import reactLogo from '@assets/react.svg'
import React, { useState } from 'react'
import ToggleTheme from '@/components/ToggleTheme'
import { Container } from './styles'
const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <ToggleTheme />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p
          dangerouslySetInnerHTML={{
            __html: 'Edite <code>src/App.tsx</code> e salve para testar'
          }}></p>
      </div>
      <p className="read-the-docs">
        Clique nos logotipos Vite e React para saber mais
      </p>
    </Container>
  )
}

export default Home
