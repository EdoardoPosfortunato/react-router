import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"


const MainLayout = () => {

    return(
        <>

        <NavBar></NavBar>
        <Outlet />
        <h2>footer</h2>

    </>
    )

}

export default MainLayout