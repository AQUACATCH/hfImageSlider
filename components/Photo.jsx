import React from 'react'

const Photo = ({currentIndex, images}) => {
  return (
    <div className='flex p-2 flex-col items-center my-auto align-middle'>
        <h3 className='p-2 text-xl italic'>{currentIndex+1}/{images.length} kép</h3>
        <div className='flex shadow-lg border-white lg:max-w-[1000px] object-fit border-[10px] rounded-xl'>
            <img src={images[currentIndex]} alt='' />
        </div>
    </div>
  )
}

export default Photo