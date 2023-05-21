
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProvider';
import { toast } from 'react-toastify';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import useTitleRoutes from '../shared/hooks/useTittle';
// import img from '../../assets/images/login/login.svg';


const SignUp = () => {
    useTitleRoutes("Register")
    const auth = getAuth(app)
    const [error,setError] = useState("")
    const navigate=  useNavigate()

    const {googleSign,createAUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const Photo = form.img.value;
        console.log(name, email, password)
        if(password?.length<6){
            toast.error("Please 6 character password")
            setError("Please 6 character password")
        }else{
            createAUser(email, password)
        .then(result =>{
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL:Photo
              })
              .then(()=>{
                toast.success("Sign Up")
                navigate('/')
                console.log(result);
              })
        })
        .catch(error => {
            setError(error?.message)
            console.log(error);
        })

        }

        
    }
    const handleGoogle =()=>{
        googleSign().then(result=>{
            const user = result.user;
            console.log(user);
             toast.success('successfully login')
        }).caches(er=>{
            setError(er)
            console.log(er);
        })
        console.log(googleSign,"and","click hoiche");
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" mr-12 w-1/2">
                <img src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1684479156~exp=1684479756~hmac=e92daca2a02fed67f533ee30dbd23e154f26a6dff6b867810d5670c1c4ab1a4c' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>

                    <form onSubmit={handleSignUp}>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="paste your photo" name="img" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" onChange={(event)=> (event.target.value).length < 6 ? setError("Please enter 6 digit password"):setError("")

                            } placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {error&&
                            <h3 className='text-red-600 text-sm font-mono'>{error}</h3>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <button
                    onClick={handleGoogle}
                     className='h-[50px] bg-blue-400 p-3 text-center text-white font-semibold'> 
                        <h4>Google Sign In</h4>
                    </button>
                    <p className='my-4 text-center'>Already Have an Account?<Link className='text-orange-600 font-bold' to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;