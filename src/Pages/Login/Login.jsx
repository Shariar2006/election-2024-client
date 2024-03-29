import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext/AuthProvider";
import swal from "sweetalert";

const Login = () => {

  const {userLogin} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = e =>{
    e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                  swal("স্বাগতম!", "আপনি সফল ভাবে login করতে পেরেছেন। !", "success")

                    navigate('/vote')
                    // <Navigate to='/login' state={{from: location}} replace></Navigate>
                }
                // Swal("Good job!", "You are successfully Logged in!", "success");
            })
            .catch(error => { 
              console.log(error) 
              return swal("Sorry!", `${error}`, "error");
            })
  }

  return (
    <div className="">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between min-h-[96vh] ">
          <div className="text-center flex-1">
            <h1 className=" text-5xl font-bold tiroBangla my-5">ভোট কেন্দ্রে স্বাগতম</h1>
            <p className="text-xl font-bold">ভোট দেওয়ার জন্য Login করুন। একটি ID card দিয়ে একটি ভোট পারবেন। </p>
          </div>
          <div className="flex-1">


            <form onSubmit={handleLogin} className="relative flex flex-col text-gray-900 shadow-md w-full md:w-96 loginRegister rounded-xl bg-clip-border mx-auto mt-16 lg:mt-0">
              <div
                className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
                <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                  Log In
                </h3>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input type="email" name="email"
                    className="w-full h-full px-3 py-3 font-sans text-lg font-semibold transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " />
                  <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[13px] font-semibold leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[13px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input type="password" name="password"
                    className="w-full h-full px-3 py-3 font-sans text-lg font-semibold transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " />
                  <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[13px] font-semibold leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[13px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>

              </div>
              <div className="p-6 pt-0">
                <input type="submit" className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" value="Log In" />
                <p className="flex justify-center mt-6 font-sans text-lg antialiased font-light leading-normal text-inherit">
                  কোনো অ্যাকাউন্ট নেই ?
                  <Link to="/register"
                    className="block ml-1 font-sans text-lg antialiased font-bold leading-normal text-blue-gray-900">
                    Register
                  </Link>
                </p>
              </div>
            </form>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;