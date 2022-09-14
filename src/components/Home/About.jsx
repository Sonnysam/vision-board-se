import React from 'react'
import image from './assests/Rectangle 9.png'
import {
    useNavigate
} from "react-router-dom"

const About = () => {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/about")
    }

  return (
    <section className='mt-24 mx-3'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                <img
                 className='lg:h-[80vh] md:flex lg:flex hidden'
                 src={image} alt="" />
            </div>
            <div>
                <strong className='text-3xl text-center'>ABOUT US</strong>
                <p className='flow-root ... max-w-md text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi porro modi molestias? Non, nobis aut delectus ea molestias reiciendis ipsam, a corrupti quibusdam accusantium distinctio vero numquam cupiditate aliquid ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iure doloremque! Atque illum nobis, ullam ipsum provident quae earum corrupti quisquam at perferendis facere, eius repellat doloribus placeat quod possimus.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro molestias nostrum aut iste. Eveniet iusto at nam deserunt id dolore, placeat minima numquam doloremque vel minus dicta autem sequi!
                </p>
                <button 
                    onClick={handleSubmit}
                    className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'
                    type='button'>
                    READ MORE
                </button>
            </div>
        </div>
    </section>
  )
}

export default About
