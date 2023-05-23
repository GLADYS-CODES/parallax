import {Parallax} from 'react-parallax'
import Satellite from '../img/satellite.jpeg'

import React from 'react'

const ImageTwo = () => {
  return (
   <Parallax  className='image' blur={0} bgImage={Satellite} strength={800}>
        <div className='content'>
            <span className='img-txt'> a trip to space</span>
        </div>
    </Parallax>
  )
}

export default ImageTwo