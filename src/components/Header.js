import { Link } from "react-router-dom"

const Header = ({ onShow }) => {
  return (
    <header>
      <Link to="/" >
        <img src="https://www.rulli.com/images/header-logo.png"></img>
      </Link>
    </header>
  )
}

export default Header
