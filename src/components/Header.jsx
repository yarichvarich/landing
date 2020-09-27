import React from 'react'
import hStyle from '../stylesheets/header.module.css'

export const Header = () => {
    return(
        <header className = {hStyle.headerWrapper}>
            <h1>Lorem ipsum</h1>
            <button>b1</button>
            <button>b2</button>
        </header>
    )
}