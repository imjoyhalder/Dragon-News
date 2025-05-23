import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

    const { user, handleLogOut } = useContext(AuthContext)

    return (
        <div className="flex justify-between  items-center">
            <div>
                {user && user.email}
            </div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                {
                   user && user.email? 
                    <Link onClick={handleLogOut} className="btn btn-neutral">Logout</Link>:  
                    <Link to='/auth/login' className="btn btn-neutral">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;