import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, googleSignin } = useContext(AuthContext);
    const handleSignup = data => {
        // console.log(data.email, data.password);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast('Successfully create account');
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
                <h1 className='text-2xl text-center'>Signup</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="password" className="input input-bordered w-full" />
                    </div>
                    <input className='btn btn-dark mt-5 w-full' type="submit" value='signup' />
                </form>
                <div className="text-center mt-3">
                    <small>Already have an account? <Link to={'/login'} className='text-green-600'>Please login</Link></small>
                </div>
                <div className="divider">OR</div>
                <button onSubmit={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;