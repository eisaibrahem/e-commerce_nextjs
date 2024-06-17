import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
        <Link style={{ position: "relative" }} className="cart" href="/cart">
          <i className="fa-solid fa-cart-shopping" />
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            className="fa-solid fa-cart-shopping"
            icon={faCartShopping}
          />
          $0.00
          <span className="products-number">2</span>
        </Link>
        <Link className="sign-in" href="/signin">
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            className="fa-solid fa-right-to-bracket"
            icon={faRightToBracket}
          />
          Sign in
        </Link>
        <Link className="register" href="/signup">
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            className="fa-solid fa-user-plus"
            icon={faUserPlus}
          />
          Register
        </Link>
      </div>
    </header>
  );
}
