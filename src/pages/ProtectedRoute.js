import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({user, children}) {
    if(user){
        return children
    } else {
        return <Navigate to='/'></Navigate>
    }
}

export default ProtectedRoute