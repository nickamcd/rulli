import { Link } from "react-router-dom"
import { FooterData } from "./FooterData"

const Footer = () => {
  return (
    <footer>
      <Link to="/" >
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
      <div className="contact-info">
        <span>phone. <a href="#">415-924-7478</a> • </span>
        <span>fax. 415-924-3474 • </span>
        <span><a href="#">info@rulli.com</a></span>
      </div>
      <div className="site-links">
        <span><Link to="/">Home</Link> • </span>
        <span><Link to="#">Terms</Link> • </span>
        <span><Link to="#">Shipping</Link> • </span>
        <span><Link to="#">Log In</Link></span>
      </div>
    </footer>
  )
}

export default Footer
