import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div>
            {
                user?.email ?
                    <div className="navbar ">
                        <div className="navbar-start">
                            <img className="w-20 lg:w-28" src="https://i.ibb.co/bsrCfWb/unnamed-removebg-preview.png" alt="" />
                        </div>
                        <div className="navbar-end ">
                            <h3 className="mr-5 text-xl font-bold">{user?.displayName}</h3>
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
                    </div> :
                    ''
            }
        </div>
    );
};

export default Navbar;