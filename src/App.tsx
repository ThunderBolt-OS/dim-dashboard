import { useState } from 'react'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './router';


function App() {

  return (
    <ThemeProvider>
      <CssBaseline/>
      {/* @ts-ignore */}
			<RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
