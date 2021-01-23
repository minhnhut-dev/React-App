import "./App.css";
import logo from "./kmin.png";
import icon_search from "./search-icon.png";
import icon_graduate from "./graduate.png";
import { Component } from "react";
import { render } from "@testing-library/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo}></img>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Trang chủ
                    <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Liên kết</a>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul> */}
          <div className="col-7">
            <form className="form-inline my-2 my-lg-0">
                <img src={icon_search}></img>
                <input className="header-search" type="text" placeholder="Tìm kiếm" aria-label="Search"/>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
