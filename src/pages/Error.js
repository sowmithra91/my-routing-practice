import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <h2>404</h2>
            <h3>Page Not Found</h3>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default Error