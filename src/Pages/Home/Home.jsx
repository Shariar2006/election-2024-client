import { Link } from "react-router-dom";

const Home = () => {
    return (

        <div className=" ">
            <div className=" text-black pt-16 md:pt-36 lg:pt-[59px] w-full h-full">
                <h1 className="text-center text-6xl font-bold tiroBangla ">ভোট কেন্দ্রে স্বাগতম</h1>
                <div className="hero h-full lg:h-[80vh]">
                    <div className="hero-content flex-col lg:flex-row-reverse ">

                        <div
                            data-aos="fade-left"
                            data-aos-duration="3000"
                        >
                            <img src="https://i.ibb.co/7ydnPnn/image.png" className="w-[320px] rounded-lg shadow-2xl" />
                        </div>

                        <div
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <div
                                className="w-full">
                                <h1 className="text-center text-4xl font-bold tiroBangla ">দ্বাদশ জাতীয় সংসদ নির্বাচন ২০২৪</h1>
                                <p className="text-center text-2xl mt-5 font-bold tiroBangla ">ভোট দেয়ার জন্য <Link className="underline" to='/login'>Login</Link> / <Link className="underline" to='/register'>Register</Link> করুন। </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Home;