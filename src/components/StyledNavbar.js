import React from 'react'
import { NavLink } from 'react-router-dom'

function StyledNavbar() {
    return (
        <nav style={{display: 'flex', gap: '20px' }}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </nav>
    )
}

export default StyledNavbar