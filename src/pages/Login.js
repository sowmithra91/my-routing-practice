import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setUser}) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()

    const submitLogin = (event) => {
        console.log('login submitted')
        console.log(event)
        console.log(username)
        console.log(password)
        setUser(username)
        event.preventDefault()
        navigate('/dashboard')
    }

    return (
        <form onSubmit={submitLogin}>
            <label>Username</label>
            <input name='username' onChange={(e) => setUsername(e.target.value)} type='text'></input>
            <label>Password</label>
            <input name='password' onChange={(e) => setPassword(e.target.value)} type='password'></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login