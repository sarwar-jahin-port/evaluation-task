"use client"
import { useState } from "react";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        zipcode: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        const { fullname, email, zipcode, password, confirmPassword } = formData;

        if (!fullname) tempErrors.fullname = "Fullname is required.";
        if (!email) tempErrors.email = "Email is required."
        else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Email is Invalid.";
        if (!zipcode) tempErrors.zipcode = "Zip code is required.";
        else if (!/^\d+$/.test(zipcode)) tempErrors.zipcode = "Zip code must be a number.";
        if (!password) tempErrors.password = "Password is required.";
        else if (password.length < 8) tempErrors.password = "Password must be at least 8 characters.";
        if (!confirmPassword) tempErrors.confirmPassword = "Confirm password is required.";
        else if (confirmPassword !== password) tempErrors.confirmPassword = "Passwords do not match.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(validate()){
            console.log("Form submitted: ", formData);
        }
    }

    return (
        <div className="border p-6 rounded mt-10">
            <form onSubmit={handleSubmit}>
                <h1 className="text-3xl text-center">Sign Up</h1>
                <div className="my-4">
                    <label htmlFor="fullname">Fullname</label>
                    <input 
                        type="text" 
                        id="fullname" 
                        name="fullname" 
                        className="border-2 rounded w-full"
                        value={formData.fullname} 
                        onChange={handleChange}
                    />{errors.fullname && <p className="text-red-400">{errors.fullname}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="border-2 rounded w-full"
                        value={formData.email} 
                        onChange={handleChange}
                    />{errors.email && <p className="text-red-400">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input 
                        type="text" 
                        id="zipcode" 
                        name="zipcode" 
                        className="border-2 rounded w-full"
                        value={formData.zipcode} 
                        onChange={handleChange}
                    />{errors.zipcode && <p className="text-red-400">{errors.zipcode}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="border-2 rounded w-full"
                        value={formData.password} 
                        onChange={handleChange}
                    />{errors.password && <p className="text-red-400">{errors.password}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        className="border-2 rounded w-full"
                        value={formData.confirmPassword} 
                        onChange={handleChange}
                    />{errors.confirmPassword && <p className="text-red-400">{errors.confirmPassword}</p>}
                </div>
                <button type="submit" className="bg-green-400 hover:bg-green-500 p-2 rounded-full font-bold w-full">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm