import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>WHAT WE DO</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/wdomer3.jpg'
                        text='there is no gain without pain'
                        label='adventure'
                        path='/services'
                        />
                         <CardItem
                        src='images/ukcc2.jpg'
                        text='pain is part of the process'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/ukcc3.jpg'
                        text='it is only a matter of choices'
                        label='adventure'
                        path='/services'
                        />
                         <CardItem
                        src='images/ukcc4.jpg'
                        text='choose and take responsibility of your choice'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/ukcc5.jpg'
                        text='that is it'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
