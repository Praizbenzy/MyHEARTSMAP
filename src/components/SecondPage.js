import React from 'react'
import './SecondPage.css'

const SecondPage = (props) => {
    return (
        <>
           <section>
                <div className='section-container'>
                    <div className='title-container'>
                        <h1>{props.title}</h1>
                    </div>
                    <div className='image-container'>
                        <img src={props.imageUrl} alt='' className='img-1'/>
                    </div>
                    <div className='pTag-container'>
                        <p>{props.body}</p> 
                    </div>
                    <div className='image-container'>
                        <img src={props.imgUrl} alt='' className='img-2'/>
                    </div>
                    <div className='pTag-container'>
                        <p>{props.body1}</p> 
                    </div>
                </div> 
           </section>   
        </>
    )
}

export default SecondPage
