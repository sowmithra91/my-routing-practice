import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import StyledNavbar from '../components/StyledNavbar'

function SharedLayout() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            {/* <Navbar></Navbar> */}
            <StyledNavbar></StyledNavbar>
            <Outlet></Outlet>
            <footer style={{marginTop: 'auto'}}>Footer</footer>
        </div>
    )
}

export default SharedLayout