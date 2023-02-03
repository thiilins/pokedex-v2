import Error404Page from '@/pages/404'
import PokemonListPage from '@/pages/PokemonList'
import Home from '@pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/Layout'
const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pokemons" element={<PokemonListPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
