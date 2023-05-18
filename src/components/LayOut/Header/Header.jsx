import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-blue-950">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path className="text-yellow-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to='/' className=" ms-2 font-bold active  ">Home</NavLink>
      <NavLink  to='/alltoy' className=" ms-2 font-bold">All Toy</NavLink>
      <NavLink  to='/blog' className=" ms-2 font-bold">Blog</NavLink>
      
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img className="img-fluid rounded-full"  src="../../../../public/rsz_logo.png" alt="" /></a>
    <h2 className=" company-name  font-extrabold italic">TOY BOX</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    
      <Link to='/' className="text-white ms-2   ">Home</Link>
      <Link to='/alltoy' className="text-white ms-2 ">All Toy</Link>
      <Link to='/blog' className="text-white ms-2 ">Blog</Link>
     
   
  </div>
  <div className="navbar-end text-white me-5">
    <Link to='/login'>Login</Link>
  </div>
</div>
        </div>
    );
};

export default Header;