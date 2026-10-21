import { Button } from '@heroui/react'
import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Controls = ({currentIndex, setCurrentIndex, imageslength}) => {
  return (
    <div className='flex p-6 justify-between'>
        <Button className='size-2xl' isDisabled={currentIndex == 0} onClick={()=> currentIndex-1 >= 0 && setCurrentIndex(currentIndex-1)}><FaArrowAltCircleLeft/></Button>
        <Button className='size-2xl' isDisabled={currentIndex+1 == imageslength} onClick={()=> currentIndex+1 < imageslength && setCurrentIndex(currentIndex+1)}><FaArrowAltCircleRight /></Button>
    </div>
  )
}

export default Controls