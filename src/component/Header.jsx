import React from 'react'
import mosque3 from '../assets/mosque3.jpeg'
import mosque2 from '../assets/mosque2.jpg'


const Header = () => {
    return (
        <div id='image' className='text-white'>
        <div className='text-center mb-6 p-8'>
            <img src={mosque3} alt="Agbayiiri Mosque" className='w-24 mx-auto mb-4' />
            <p className='text-lg font-semibold'>Agbayiiri Mosque</p>
            <p className='text-xl font-bold'>MOSQUE FUND RAISING PROJECT</p>
            <p>We seek your support for solar power at Agbayiri Mosque, Ogbomoso, Oyo State.</p>
        </div>
    
        <div className='grid grid-cols-1 text-center gap-8 mb-3'>
            <div className='bg-white mx-auto w-[40%] font-bold px-8 p-3 text-blue-700  rounded'>
                <p className='font-bold text-blue-700'>TARGET: N200,000</p>
                <p>AMOUNT RAISED: N50,000</p>
                <p>REMAINING: N150,000</p>
            </div>
            
        </div>
    
        <div className='grid grid-cols-2 text-center  gap-8 mb-8 p-6'>
            <div className='bg-white font-bold text-blue-700 p-6 rounded'>
                <p className='font-bold text-blue-700'>Opay Account</p>
                <p className=' text-blue-700'>Account Name: AbdulAzeez Kazeem Ayinde</p>
                <p>Account Number: 8039176041</p>
            </div>
            <div className='bg-white font-bold text-blue-700 p-6 rounded'>
                <p className=' text-blue-700'>Wema Account</p>
                <p>Account Name: AbdulAzeez Kazeem Ayinde</p>
                <p>Account Number: 0256610088</p>
            </div>
        </div>
    
        <div className='text-center bg-slate-500 w-[70%] lg:w-[30%] mx-auto opacity-70'>
            <p className='font-bold text-xl'>For more inquiries, please contact:</p>
            <p className='font-bold text-xl'>08039176041</p>
        </div>
    </div>
    
    

    )
}

export default Header