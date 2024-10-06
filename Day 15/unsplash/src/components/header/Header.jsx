import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <>
      <header>
        <h1><Link to="/">UNSPLASH</Link></h1>
      </header>
    </>
  )
}

export default Header
