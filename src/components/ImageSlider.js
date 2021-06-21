import { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

const ImageSlider = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(0)
  const length = slides.length
  
  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const previousSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="icon left-arrow" onClick={ previousSlide } />
      <FaArrowCircleRight className="icon right-arrow" onClick={ nextSlide }/>
      { slides.map((slide, index) => { 
        return (
          <div className={ index === currentImg ? 'slide active' : 'slide' } key={ index }>
            { index === currentImg && (<img src={ slide.image } alt="" />) }
          </div>
        )
      }) }
    </section>
  )
}

export default ImageSlider