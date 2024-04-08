
import Navbar from '@/components/navbar/navbar'
import { Outlet } from 'react-router-dom'

const HomePageLayout = () =>
{
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default HomePageLayout