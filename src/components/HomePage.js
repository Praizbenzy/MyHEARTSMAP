import React from 'react'
import './HomePage.css'
import heartImg from '../images/AssetOne.png'
import phoneImg from '../images/Parent_Illustrations-01.svg'

const HomePage = () => {
    return (
        <>
            <div className='bodySection'>
                <div className='titleArea'>
                    <img src={heartImg} alt='HeartImg' className='favicon' />
                </div>
                {/* <div className='heartSamp'>
                    <h1><span className='heartSamp1'>HeartSamp</span> Program</h1>
                </div> */}
                <div className='phoneArea'>
                    <h1 className='heartSamp'>What is My <span className='heartSamp1'>HeartSamp</span> ?</h1>
                    <img src={phoneImg} alt='phoneImg' className='phone-img'/>
                </div>
            </div>
        </>
    )
}

export default HomePage
