import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import {useState} from "react";

export default function SignUp(){
   const [formData, setFormData] = useState({});
   

   const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value});
   }
   
//    const handleSubmit = async (e)=> {
//     e.preventDefault();
//     try{
//      const res = await fetch('/api/auth/signup', {
//         method:'POST',
//         headers: {'Content-Type':'application/json'},
//         body:JSON.strigify(formData),
//      });
//      const data = await res.json();
//     }catch(error) {

//     }

    
//   }
    


    return (
        <div className="min-h-screen mt-20">
            <div className="flex flex-col p-5 max-w-3xl mx-auto gap-4 md:flex-row md:items-center">
                {/* left side div */}
                <div className="flex-1">
                <Link to="/" className="text-4xl m:text-xl font-bold dark:text-white" >
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Sahand's </span>Blog
                </Link>
                <p className="text-sm mt-5 font-semibold">
                    This is a demo project. You can sign up with your email and password or Google account
                </p>
                </div>

                {/* right side div */}
                <div className="flex-1">
                  <form className="flex flex-col gap-3" onSubmit={handleSubmit} >
                    <div>
                        <Label value="Your username" className="" />
                        <TextInput 
                         type="text"
                         placeholder="username"
                         id="username" onChange={handleChange} />
                    </div>

                    <div className="">
                        <Label value="Your email" />
                        <TextInput 
                         type="email"
                         placeholder="jdhoshzad100@gmail.com"
                         id="email"  onChange={handleChange}/>
                    </div>

                    <div>
                        <Label value="password"/>
                        <TextInput type="password" placeholder="password" id="password" 
                          onChange={handleChange}
                        />
                    </div>

                    <Button gradientDuoTone="purpleToPink" type="submit">
                        Sign Up
                    </Button>
                  </form>
                  <div className="flex text-sm mt-5 gap-2">
                    <span>Have you an account</span>
                    <Link to="/signin" className="text-blue-500">
                        Signin
                    </Link>
                  </div>
                </div>
                
            </div>
        </div>
    )
}