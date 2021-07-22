import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início"
            subtitle="Projeto usando React" />
        <Footer />
    </div>