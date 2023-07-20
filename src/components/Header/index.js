import { Link, withRouter } from "react-router-dom"
import { default as Cookies } from "js-cookie"

import Logo from "../../assets/CareerConnect.png"
import "./index.css"

const Header = (props) => {
  const { history } = props
  const onClickLogout = () => {
    Cookies.remove("jwt_token")
    console.log(history)
    history.replace("/")
  }
  return (
    <div className="header-bg-container">
      <div className="header-content-container">
        <img src={Logo} alt="website logo" className="header-logo" />
        <div className="menu-text-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="menu-text">Home</p>
          </Link>
          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <p className="menu-text">Jobs</p>
          </Link>
        </div>
        <button onClick={onClickLogout} className="button logout-btn">
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
