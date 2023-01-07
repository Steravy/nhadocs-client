import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/header/HeaderComponent";
import './Layout.css';


export default function Layout() {

    return (
        <div className="wrapper">

            <HeaderComponent />


            <div className='midle-section'>

                <div className="content">

                    <Outlet />
                </div>

            </div>

            <footer>Some footer</footer>
        </div>
    )

}