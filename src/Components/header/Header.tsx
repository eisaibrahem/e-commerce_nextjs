import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const ArryData = [];
export default function Header() {
  return (
    <header id="headerElement" className="flex">
      <div className="logo">
        <FontAwesomeIcon
          style={{ width: "1.5rem", marginRight: "0.3rem" }}
          className="fa-solid fa-bag-shopping"
          icon={faBagShopping}
        />
        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </div>
      <div className="links">
        <a
          style={{ position: "relative" }}
          className="cart"
          href="./pages/cart.html"
        >
          <i className="fa-solid fa-cart-shopping" />
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            className="fa-solid fa-cart-shopping"
            icon={faCartShopping}
          />
          $0.00
          <span className="products-number">2</span>
        </a>
        <a className="sign-in" href="./pages/signin.html">
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            className="fa-solid fa-right-to-bracket"
            icon={faRightToBracket}
          />
          Sign in
        </a>
        <a className="register" href="./pages/register.html">
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            className="fa-solid fa-user-plus"
            icon={faUserPlus}
          />
          Register
        </a>
      </div>
    </header>
  );
}
