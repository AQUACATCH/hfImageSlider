import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from '../components/header'
import Photo from '../components/Photo'
import Controls from '../components/Controls'
import { imagesArr } from '../data'

function App() {
  const [images] = useState(imagesArr)
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(currentIndex)

  return (
    <div className='flex flex-col bg-blue-200 min-h-[calc(100vh)]'>
      <Header />
      <div className='my-auto'>
        <Photo currentIndex={currentIndex} images={images} />
        <Controls currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} imageslength={images.length} />
      </div>
    </div>
  )
}

export default App
