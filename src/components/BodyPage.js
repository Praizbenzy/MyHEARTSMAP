import React from 'react'
import './SecondPage.css'

const BodyPage = (props) => {
    return (
        <section>
            <div className='section-container'>
                    <div className='title-container'>
                        <h1>{props.title}</h1>
                    </div>
                    <div className='img-container'>
                        <img src={props.imageUrl} alt='' className='img1'/>
                    </div>
                    <div className='img-container'>
                        <img src={props.imgUrl} alt='' className='img2'/>
                    </div>
                    <div className='p-container'>
                        <p>{props.body}</p> 
                    </div>
            </div>
        </section>
    )
}

export default BodyPage
