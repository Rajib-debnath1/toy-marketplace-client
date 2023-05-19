
import { Link } from "react-router-dom";
import logo from "../assets/icons/plastic-building-blocks-toys.jpg"
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const Navbar = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                   
            
                    {/* for small */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/"> Home</Link></li>
                            <li><Link to="/register"> Register</Link></li>
                            <li><Link to="/Login"> Login </Link></li>
                            {user &&
                            <div className="pl-3">
                            <li><Link to="/allToy"> All Toys</Link></li>
                            <h2><Link to="/AddToys"> Add Toys</Link></h2>
                            <h2><Link to="/mytoy"> My Toy</Link></h2>
                            </div>
                            }
                            <li><Link to="/blogs"> Blogs</Link></li>
                            
                        </ul>
                    </div>
                    <img src={logo} className="h-[30px] w-[30px]" alt="logo" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Funny  Toys </Link>
                </div>
                <div className="navbar-center">
                    
                </div>
                <div className="navbar-end">
                    {/* for large device */}
                <div  className="hidden lg:flex gap-5 mx-auto justify-between md:hidden sm:hidden  font-[500]">
                            <h2><Link to="/"> Home</Link></h2>
                            <h2><Link to="/register"> Register</Link></h2>
                            <h2><Link to="/Login"> Login </Link></h2>
                            {user?.email &&
                            <>
                            <h2><Link to="/allToy"> All Toys</Link></h2>
                            <h2><Link to="/AddToys"> Add Toys</Link></h2>
                            <h2><Link to="/mytoy"> My Toy</Link></h2>
                            </>
                            }
                            <h2><Link to="/blogs"> Blogs</Link></h2>
                            
                        </div>
                    
                    <button className="btn btn-ghost btn-circle">

                        <div className="indicator">

                            { user?.email&&
                            <div className="tooltip" data-tip={user?.email}>
                                <img  src={user.photoURL} className="rounded-[100%] h-[30px] w-[30px] "/>
                            </div>
                            
                            }
                           
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;