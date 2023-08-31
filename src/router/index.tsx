import { createBrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { MainLayout } from '../layouts';

const router : BrowserRouterProps = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>
    },
    
])

export default router