import React from 'react'
import image1 from "./assests/kisspng-logo-product-design-brand-font-5ba32bf26c4ac7 1 (1).png"
import image2 from "./assests/kisspng-onyx-management-group-southampton-business-propert-real-estate-investment-trust-5b26a6bd327676 1.png"
import image3 from "./assests/kisspng-real-estate-logo-consultant-estate-agent-business-real-estate-wall-5b29147e34ffc7 1.png"
import image4 from "./assests/kisspng-skyline-team-real-estate-logo-house-product-banks-and-mortgage-companies-frederick-county-asso-5be49bcd3ded83 1.png"

function Partners() {
  return (
    <div className="mt-10">
        <div className='text-center h-full w-full'>
            <h1 className='text-3xl font-bold'>Our Partners</h1>
            <p className='text-md text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur
            </p>
        </div>
        <div className='grid grid-cols-4 gap-4 text-center  md:ml-[225px] mt-9'>
            <div>
                <img src={image1} alt=""
                className='md:w-[40%]'
                 />
            </div>
            <div>
                <img src={image2} alt="" className='md:w-[40%]' />
            </div>
            <div>
                <img src={image3} alt="" className='md:w-[40%]' />
            </div>
            <div>
                <img src={image4} alt=""className='md:w-[40%]' />
            </div>
        </div>
        <div className='grid grid-cols-3 gap-1 text-center mt-5'>
            <div>
                <h1 className='font-bold text-3xl'>
                    1450 +
                </h1>
                <p>
                    Lorem ipsum dolor,
                </p>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>
                    1450 +
                </h1>
                <p>
                    Lorem ipsum dolor,
                </p>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>
                    1450 +
                </h1>
                <p>
                    Lorem ipsum dolor,
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Partners