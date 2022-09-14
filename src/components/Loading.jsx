import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center text-4xl text-blue-600  h-screen font-bold text-center justify-center'>
        <span className="">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            Processing....
        </span>
    </div> 
  )
}

export default Loading