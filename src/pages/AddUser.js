import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({name: "", username: "", email: ""});
    const {name, username, email} = user;
    const navigate = useNavigate();

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(user);
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    };
    return (
        <div className='container'>
        <form onSubmit={(e) => submitHandler(e) }>
            <div>
                <label htmlFor="name">Name</label>
                <input type={"text"} placeholder="Enter name" name="name" value={name} onChange={(e) => onInputChange(e)}/>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input type={"text"} placeholder="Enter username" name="username" value={username} onChange={(e) => onInputChange(e)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type={"text"} placeholder="Enter email" name="email" value={email} onChange={(e) => onInputChange(e)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default AddUser
