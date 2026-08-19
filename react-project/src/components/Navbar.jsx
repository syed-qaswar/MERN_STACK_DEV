import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="bg-amber-300 flex justify-between p-3">
            <div>ReactApp</div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <a href="">Explore More</a>
        </div>
    )
}

export default Navbar;