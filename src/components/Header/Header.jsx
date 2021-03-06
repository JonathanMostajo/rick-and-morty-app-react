import { NavLink } from "react-router-dom";
import "./Header.scss";
import Profile from "../Profile/Profile"
export default function Header() {
  return (
    <header className="c-header">
      <nav className="c-header__nav">
        <NavLink to="/" className="c-header__nav--link">Home</NavLink>
        <NavLink to="/characters" className="c-header__nav--link">Characters</NavLink>
        <NavLink to="/locations" className="c-header__nav--link">Locations</NavLink>
        <NavLink to="/search" className="c-header__nav--link">Search</NavLink>
      </nav>
      <Profile/>
    </header>
  );
}
