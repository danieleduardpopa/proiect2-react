import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div className='container d-flex flex-column'>
            <h1>Page404</h1>
            <h2>Page not found</h2>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default Page404
