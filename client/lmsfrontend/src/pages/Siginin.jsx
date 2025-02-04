import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail} from "../helpers/regexmatcher";
import HomeLayout from "../layout/HomeLayout";
import {  login } from "../redux/slices/authSlics";

function Siginin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [siginDetails, setSiginDetails] = useState({
        
        fullName: '',
        password: '',
      
    });

   

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSiginDetails({
            ...siginDetails,
            [name]: value
        })

    }

    

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(siginDetails);
        if(!siginDetails.email || !siginDetails.password  ) {
            toast.error("Please fill all the details");
            return;
        }
       
        if(!isEmail(siginDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
       
        const formData = new FormData();
        



        const response =  dispatch(login(siginDetails));
        console.log(response);
        if(response?.payload?.data) {
            navigate("/");
        }
        setSiginDetails({
            email: '',
            password: '',
            
        });
       
    }

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-35">
                    <h1 className="text-2xl text-center font-bold">Login  Page</h1>
                   
                   
                        
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input 
                            onChange={handleUserInput}
                            value={siginDetails.email}
                            required
                            type="text" 
                            name="email"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="enter your Email..."
                            id="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input 
                            required
                            onChange={handleUserInput}
                            value={siginDetails.password}
                            type="password" 
                            name="password"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="enter your Password..."
                            id="password" />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
                       Sigin In
                    </button>
                    <p className="text-center">
                            Do not have an account ? <Link to="/siginup" className="cusror-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Siginin;