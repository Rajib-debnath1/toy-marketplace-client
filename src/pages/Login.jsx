
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import img from '../../assets/images/login/login.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import useTitleRoutes from '../shared/hooks/useTittle';


const Login = () => {
    useTitleRoutes("Register")

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const {signIn} = useContext(AuthContext);
    const [error,setError] = useState("")


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate(from, {replace :true})
        })
        .catch(error => {
            setError(error)
            console.log(error,"from login page");
        });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-12 w-1/2">

                    <img src={'https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1684479156~exp=1684479756~hmac=e92daca2a02fed67f533ee30dbd23e154f26a6dff6b867810d5670c1c4ab1a4c'} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>

                        <form onSubmit={handleLogin}>
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
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {error&&
                            <h3 className='text-red-6000 text-sm font-mono'>{error}</h3>


                            }
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Funny Toys?<Link className='text-orange-600 font-bold' to="/signup"> Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;