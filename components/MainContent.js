import React from 'react'


function MainContent(){
    
    return (
        <main className='main-container'>
            <h1 className = 'main--title'>Sahil Gohil</h1>
            <p className = 'main--subtitle'>Frontend Developer</p>
            <p className = 'main--site'>sahilgohil.website</p>
            <div className='main-btn-container'>
                <a className="main--email-btn" href="mailto:sahil.gohil11@gmail.com" target='_blank' title='My Email link'><img src="../images/mail-icon.png" className='email--img'/> Email</a>
                <a className="main--linkdln-btn" href="https://www.linkedin.com/in/sahil-gohil-849479149" target='_blank' title='My Linkein profile url'><img src='../images/linkedin.png' className='linkedin-img'/>LinkedIn</a>
            </div>
            <div className="main--content-div">
                <h2 className="content-heading">About</h2>
                <p  className='content-body'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="content-heading">Interests</h2>
                <p className='content-body'>Food expert. Gamer. Reader. Internet fanatic. Entrepreneur. NO Travel geek. tech culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}

export {MainContent}