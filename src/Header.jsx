import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <h1>
        <Link className="site-title" to="/">
          GadgetCart
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
