import React from 'react'
import image1 from "./assests/kisspng-logo-product-design-brand-font-5ba32bf26c4ac7 1 (1).png"


const Main = () => {
  return (
    <section className='main mr-10 mb-8'>
        <div className="text-center mr-1">
             <h1 className="font-bold text-3xl">WHY CHOOSE US</h1>
             <p>Lorem ipsum dolor sit</p>
        </div>
        <div className='grid grid-cols-3 gap-1 text-center lg:ml-20 mt-5'>
            <div className="bg-black text-white md:w-[70%] shadow-2xl ">
                <img src={image1} alt=""
                    className='md:w-[40%] lg:ml-[100px] text-center'
                 />
                <h1>ABOUT US</h1>
            </div>
            <div className="bg-black text-white md:w-[70%] shadow-2xl">
                <img src={image1} alt=""
                    className='md:w-[40%] lg:ml-[100px] text-center'
                 />
                <h1>ABOUT US</h1>
            </div>
            <div className="bg-black text-white lg:ml-[100px] md:w-[70%] shadow-2xl">
                <img src={image1} alt=""
                    className='md:w-[40%] text-center'
                 />
                <h1>ABOUT US</h1>
            </div>
            
            
        </div>
    </section>
  )
}

export default Main