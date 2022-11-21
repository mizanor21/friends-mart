import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginUser, googleSignin } = useContext(AuthContext);
    const handleLogin = data => {
        // console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast('Successfully login!')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast(errorMessage);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Successfully google sign in!');
            })
            .catch(error => {
                const errorMessage = error.message;
                toast(errorMessage);
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="shadow-2xl p-10 rounded-xl">
                <h1 className='text-2xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="Email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="password" className="input input-bordered w-full" />
                    </div>
                    <p className='flex justify-end text-green-600 mt-3'><small><Link>forget password?</Link></small></p>
                    <input className='btn btn-dark w-full mt-3 mb-3' type="submit" value='login' />
                </form>
                <div className="text-center">
                    <small className='text-center'>New to friends mart? <Link to={'/signup'} className='text-green-600'> Create new account</Link></small>
                </div>
                <div className="divider">OR</div>
                <div className="">
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;