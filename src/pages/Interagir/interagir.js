import React from 'react';

import { Zoom } from 'react-slideshow-image';
import './interagir.css'
import slide1 from '../../assents/slide2.png'
import slide2 from '../../assents/slide1.png'
import slide3 from '../../assents/slide3.png'
import slide4 from '../../assents/slide4.png'
const images = [
  slide1,
  slide2,
  slide3,
  slide4
];

const zoomOutProperties = {
  duration: 6000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false
}

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {
          images.map(src => <img style={{ width: "100%" }} src={src} />)
        }
      </Zoom>
    </div>
  )

}

