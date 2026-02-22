import logo from "../../../../assets/react.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header container-fluid bg-black text-white">
        <div className="container">
          <nav className="p-3 d-flex flex-column flex-lg-row justify-content-lg-be justify-content-between align-items-center">
            <h3>
              <img src={logo} alt="logo" />
              &nbsp; &nbsp; Sample Inc
            </h3>
            <ul
              className="nav nav-underline gap-5"
              style={{ fontSize: "24px" }}
            >
              <li>
                <Link to={"/"} className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="nav-link text-white">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link text-white">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
