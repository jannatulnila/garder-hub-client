import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();




    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)

        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());


        console.log(email, password, userProfile);

        setSuccess(false);



        if (!/[a-z]/.test(password)) {
            setErrorMessage('Password must include at least one lowercase letter.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password must include at least one uppercase letter.'
            );
            return;
        }
        else if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        } else {
            setErrorMessage('');
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // user added db
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your Account has been created.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })



                setSuccess(true);
                navigate("/");
            })
            .catch((error) => {

                const errorMessage = error.message;
                // alert(errorMessage);
                setErrorMessage(errorMessage);
            });
    }
    return (
        <div className='flex justify-center items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <p className='font-semibold text-xl text-center mt-4'>Register your Account </p>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text" className="input" placeholder="Your Name" required />

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <button type='submit' className="btn btn-primary mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Already have an account?<Link className='text-primary underline' to="/auth/login">Login</Link> </p>
                    </fieldset>
                </form>
                {
                    errorMessage && <p className='text-red-600'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-500'>User has created successfully</p>
                }
            </div>
        </div>
    );
};

export default Register;