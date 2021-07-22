import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-folder"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-user-circle"></i> Usuários
            </Link>
        </nav>
    </aside>