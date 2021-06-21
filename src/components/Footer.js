import { Link } from "react-router-dom"
import { FooterData } from "./FooterData"

const Footer = () => {
  return (
    <footer>
      <Link exact to="/" >
        <img src="https://www.rulli.com/images/footer-logo.png" />
      </Link>
      <div className="footer-btn-group">
        { FooterData.map((item, index) => {
          return (
            <Link to={ item.path } key={ index } className={ item.className } target="_blank">
              { item.icon }
            </Link>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
