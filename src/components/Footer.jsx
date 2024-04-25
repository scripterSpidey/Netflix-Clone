import React from 'react'

const Footer = () => {
  return (
    <div className=' flex justify-center text-gray-500 text-xs bg-gray-900'>
        <div className='w-3/5 bg-transparent p-5'>
            <div className='flex mb-2 font-bold justify-start space-x-4' >
                <div>Facebook</div>
                <div>Twitter</div>
                <div>Instagram</div>
                <div>Youtube</div>
            </div>
            <div className='flex justify-between'>
                <div className='list-none'>
                    <li className='mb-2'>Audio Desctiption</li>
                    <li className='mb-2'>Investor Relations</li>
                    <li className='mb-2'>Legal Notices</li>
                </div>
                <div className='list-none'>
                    <li className='mb-2'>Help Centre</li>
                    <li className='mb-2'>Job</li>
                    <li className='mb-2'>Cookies Prefferences</li></div>
                <div className='list-none'>
                    <li className='mb-2'>Gift Cards</li>
                    <li className='mb-2'>Terms of Use</li>
                    <li className='mb-2'>Coorporate Information</li>
                </div>
                <div className='list-none'>
                    <li className='mb-2'>Media Centre</li>
                    <li className='mb-2'>Privacy</li>
                    <li className='mb-2'>Contact Us</li>
                </div>
            </div>
            <div >
                <button className="border border-white p-1 mb-4">Service Code</button>
                <p>1997-2024 Netflix,inc.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
