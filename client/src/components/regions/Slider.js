import React, { useEffect, useState } from 'react'
// import ImageSlides from './ImageSlides'

const Slider = ({ slides }) => {

  const [current, setCurrent] = useState(0)
  const { length } = slides

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    setTimeout(nextImage, 4000)
  })
  


  return (
    <section className="slider">
      {slides.map((slides, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={slides.title}>
          <h1 className="slider-h1">{slides.title}</h1>
          {index === current && (
            <img className="slider-image" src={slides.image} />
          )}
        </div>
      ))}
    </section>
  )
}

export default Slider