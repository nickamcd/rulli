import { Link } from "react-router-dom"

const Location = ({url, title, path}) => {
  return (
    <Link to={ path }>
      <img src={ url } />
      <h1>{ title }</h1>
    </Link>  
  )
}

export default Location
