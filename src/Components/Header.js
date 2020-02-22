import React, { Component } from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className='col-12 col-md-8'>
            <Link to={'/'}>
                <h2 className='text-center'>Courses Management</h2> 
            </Link>
        </header>
    )
}
export default Header;