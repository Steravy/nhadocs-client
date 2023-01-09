import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/header/HeaderComponent";
import NavBarComponent from "../components/header/NavBarComponent";
import './Layout.css';


export default function Layout() {

    return (
        <div className="wrapper">

            {/* <HeaderComponent /> */}
            <NavBarComponent />


            <div className='midle-section'>

                <div className="content">

                    <Outlet />
                </div>

            </div>

            <footer>Some footer</footer>
        </div>
    )

}