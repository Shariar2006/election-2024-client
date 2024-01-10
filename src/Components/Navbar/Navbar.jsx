import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  console.log(user)

  const handleLogOut = () => {
    logOut()
  }

 const navLink = <>
 <li><NavLink to={'/vote'}>ভোট দিন </NavLink></li>
 </>

  return (
    <div>
      {
        user?.email ?
          <>
            <div className="navbar text-xl font-bold ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                  </ul>
                </div>
                <div className="navbar-center lg:navbar-start">
                <img className="w-20 lg:w-28" src="https://i.ibb.co/bsrCfWb/unnamed-removebg-preview.png" alt="" />
              </div>              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navLink}
                </ul>
              </div>
              <div className="navbar-end ">
                <h3 className="mr-5 ">{user?.displayName}</h3>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">

                      <img alt="Tailwind CSS Navbar component" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' />

                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleLogOut} className="btn">Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          </> :
          ''
      }
    </div>
  );
};

export default Navbar;