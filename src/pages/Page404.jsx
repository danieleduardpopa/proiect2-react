import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div className='container d-flex flex-column'>
            <h1>Page404</h1>
            <p>Page not found</p>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default Page404
