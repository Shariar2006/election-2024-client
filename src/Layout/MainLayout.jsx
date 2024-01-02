import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        // <div className="bg-gradient-to-t from-[#ffffff] to-[rgba(21, 21, 21, 0.00)] h-full">
        <div className=" max-w-[1440px] mx-auto ">
            <Outlet></Outlet>
        </div>
        // </div>
    );
};

export default MainLayout;