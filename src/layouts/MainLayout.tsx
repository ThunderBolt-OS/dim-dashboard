import { Box, Paper } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '../components'

type Props = {}

const MainLayout: React.FC = () => {
  return (
    <Box>
      <Header/>

      {/* <Sidebar/> */}

      <Paper>
        <Outlet/>
      </Paper>
    </Box>
  )
}

export default MainLayout