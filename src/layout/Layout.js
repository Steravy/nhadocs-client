import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import './Layout.css';


export default function Layout() {

    return <>

        {/* We must have a top bar here */}

        <div className='midle-section'>

            {/* <SideBarComponent/> */}

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