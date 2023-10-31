import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <h1>
        <Link className="site-title" to="/">
          Title
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
