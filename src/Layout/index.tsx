import React from 'react'
import { Grid } from './styles'
import Content from './Content'
interface ILayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Grid>
      <Content>{children}</Content>
    </Grid>
  )
}

export default Layout
