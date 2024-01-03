import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        // <div className="bg-gradient-to-t from-[#ffffff] to-[rgba(21, 21, 21, 0.00)] h-full">
        <div className=" max-w-[1440px] mx-auto ">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        // </div>
    );
};

export default MainLayout;