import {Link} from "react-router-dom";

function Home(){
    return(
        <>
        <h1>HOME PAGE</h1>
        <ul>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><Link to="/Login">Logout</Link></li>
        </ul>
        </>
    )
}

export default Home;