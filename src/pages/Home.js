import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("Good boiiii");
        loadUsers();
    }, [])

    const loadUsers =  async () => {
        const result = await axios.get("http://localhost:8080/user");
        setUsers(result.data);
        console.log("Fetched result ->", result);
        console.log("Fetched users -> ", users)
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
    }
    return (
        <div className=''>
            <Link to="/adduser">ADD USER</Link>
            {
                users.map((user, index) => (  
                    <div key={index} className=''>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <Link to={`/edituser/${user.id}`}>EDIT</Link>
                        <Link onClick={deleteUser(user.id)}>DELETE</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
