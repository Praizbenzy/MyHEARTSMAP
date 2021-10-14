import React from 'react'
import './SecondPage.css'

const ThirdPage = (props) => {
    return (
        <>
            <div className='letterContainer'>
                        <h1 className='letterHeader'>{props.letterHeader}</h1>
                        <div className='wrapper'>
                            <img src={props.imageUrl} alt='' className='imgP'/>
                            <p className='pTag'>{props.body}</p>
                        </div>
             </div>
        </>
    )
}

export default ThirdPage
