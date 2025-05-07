import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {handleEmailPasswordRegister, setUser} = useContext(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const photo_url = e.target.photo_url.value 
        const email = e.target.email.value 
        const password = e.target.password.value 

        handleEmailPasswordRegister(email,password)
            .then(result=>{
                setUser(result.user)
                console.log(result.user)
                
            })
            .catch(error=>{
                console.log(error.message, error.code)
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  px-2 py-4">
                <h2 className='text-2xl font-semibold text-center mt-2'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo_url' placeholder="Enter photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-full">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Already Have An Account please! <span className='underline text-red-500'>{<Link to='/auth/login'>Login</Link>}</span>  </p>
            </div>
        </div>
    );
};

export default Register;