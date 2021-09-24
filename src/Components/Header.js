import React from 'react'
import Typed from 'react-typed';
import './Header.css'

function Header() {
    return (
        <div className='header-wrapper'>
            <div className="main-info jumbotron">
                <h1>Ross Nkama</h1>
                <Typed
                    strings={[
                        'Ross Nkama',
                        'Bright Network trainer',
                        'Passion for Tech']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </div>
        </div>
    )
}

export default Header
