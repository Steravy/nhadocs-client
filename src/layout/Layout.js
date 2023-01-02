import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";
import './Layout.css';


export default function Layout() {

    return <>

        {/* We must have a top bar here */}
        <HeaderComponent/>


        <div className='midle-section'>

            <div className="content">
                <Paper sx= {{
                    padding: 2
                }}> 
                    <Outlet /> 
                </Paper>
            </div>

        </div>

        <footer>Some footer</footer>
    </>

}