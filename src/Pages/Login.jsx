import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { handleLoginEmail , setUser } = useContext(AuthContext)

    const [error, setError] = useState({})

    const navigate = useNavigate()
    const location = useLocation()
    //console.log(location)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        handleLoginEmail(email, password)
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location.state: '/')
            })
            .catch(err => {
                setError({...error, login: err.code })
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  px-2 py-4">
                <h2 className='text-2xl font-semibold text-center mt-2'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className='label text-sm text-red-500'>
                                    {error.login}
                                </label>
                            )
                        }
                        <br />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-full">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Don't Have An Account? <span className='underline text-red-500'>{<Link to='/auth/register'>Register</Link>}</span>  </p>
            </div>
        </div>
    );
};

export default Login;