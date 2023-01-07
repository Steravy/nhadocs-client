import { Link } from "@mui/material";
import BackGroundVideoComponent from "../components/BackGroundVideoComponent";



export default function Home() {

    return (
        <div style={{backgroundColor: 'rgba(246, 246, 244, 1)'}}>
            <BackGroundVideoComponent />
            
            {/* <Link href="/template">Home Page</Link> */}

        </div>
    );

}

const style = {
    backgroundcolor: 'rgba(246, 246, 244, 1)',
}