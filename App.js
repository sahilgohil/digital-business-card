import React from 'react'
import {Header} from './components/Header'
import {MainContent} from './components/MainContent'
import {Footer} from './components/Footer'


function App()
{
    return(
        <div className='app-container'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export {App}