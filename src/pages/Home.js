import { Link } from "react-router-dom"
import ImageSlider from "../components/ImageSlider"
import { SliderData } from "../components/SliderData"

const Home = () => {
  return (
    <div className="home page">
      <ImageSlider slides={ SliderData }/>
      <h1>Welcome to Emporio Rulli</h1>
      <p>
        Emporio Rulli, the creation of Gary and Jeannie Rulli, 
        is the classic Italian pastry, caffè and wine shop located 
        – not in Italy – but in historic downtown Larkspur in 
        Marin County, twenty minutes across the Golden Gate Bridge, 
        North of San Francisco. 
      </p>
      <p>
        Apprenticed to Pastry Chefs in Milan and Turin, Rulli 
        returned to America determined to preserve their art. Since 
        1988 when Emporio Rulli was opened, Gary’s reputation as a 
        Pastry Chef has spread across America. His Panettone, the 
        traditional Milanese Christmas bread, is sent worldwide.
      </p>
      <Link to="/shop" >
        <img src="https://www.rulli.com/userfiles/cms/tiles/9/thumb_tile-order-online.jpg" alt="" />
        <p>Order Online</p>
      </Link>
    </div>
  )
}

export default Home
