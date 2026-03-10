import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Courses from "./Courses";
import CourseDet from "./CourseDet";

function Dashboard(){
    return(
        <div>
            <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/courses" element={<Courses />}/>
            <Route path="/courses/:id" element={<CourseDet />}/>
            </Routes>
        </div>
    )
}

export default Dashboard;