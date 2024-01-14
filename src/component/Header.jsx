import React from 'react'
import mosque3 from '../assets/mosque3.jpeg'
import mosque2 from '../assets/mosque2.jpg'


const Header = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-indigo-700 text-white min-h-screen'>
        <div className='container mx-auto p-8'>
            <div className='flex items-center justify-between mb-8'>
                <img src={mosque3} alt="Agbayiiri Mosque" className='w-12 mr-4' />
                <p className='text-lg font-semibold'>Agbayiiri Mosque</p>
            </div>
    
            <h2 className='text-3xl font-bold text-center mb-6'>MOSQUE FUND RAISING PROJECT</h2>
    
            <p className='text-center mb-6'>
                We seek your support for the purchase of solar power at Agbayiri Mosque in Ogbomoso, Oyo State.
            </p>
    
            <div className='grid lg:grid-cols-2 gap-8 mb-8 bg-white p-6 rounded'>
                <div className=' text-blue-700'>
                    <p className='font-semibold text-blue-700'>TARGET: N200,000</p>
                    <p>AMOUNT RAISED: N50,000</p>
                    <p>REMAINING: N150,000</p>
                </div>
                <div>
                    <img src={mosque2} alt="Solar Power Project" className='w-[20%]' />
                </div>
            </div>
    
            <div className='grid lg:grid-cols-2 gap-8 mb-8 bg-white p-6 rounded'>
                <div className=' text-blue-700'>
                    <p className='font-semibold text-blue-700'>Opay Account:</p>
                    <p>Account Name: AbdulAzeez Kazeem Ayinde</p>
                    <p>Account Number: 8039176041</p>
                </div>
                <div className=' text-blue-700'>
                    <p className='font-semibold text-blue-700'>Wema Account:</p>
                    <p>Account Name: AbdulAzeez Kazeem Ayinde</p>
                    <p>Account Number: 0256610088</p>
                </div>
            </div>
    
            <p className='text-center mb-4'>For more inquiries, please contact:</p>
            <p className='text-center font-bold text-xl bg-blue-700 text-white p-4 rounded'>08039176041</p>
        </div>
    </div>
    

    )
}

export default Header