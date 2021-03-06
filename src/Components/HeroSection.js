import React from 'react';
import {Button} from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay muted loop />
            <h1>UNIVERSITY OF KHARTOUM CONSULTANCY CORPORATION</h1>
            <p>  true desire in the heart for anything good is God's proof to you sent beforehand to indicate that it is your's already.</p>
            <h2>what are you waiting for?!</h2>
            <div className='hero-btns'>
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                <Button className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                WATCH TRAILER<i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
