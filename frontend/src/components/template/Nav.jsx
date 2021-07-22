import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-folder"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-user-circle"></i> Usuários
            </a>
        </nav>
    </aside>