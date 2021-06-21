import ImageSlider from "../components/ImageSlider"
import { SliderData } from "../components/SliderData"

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <ImageSlider slides={ SliderData }/>
    </div>
  )
}

export default Home
