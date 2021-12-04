import "./Navbar.css";
import NavbarItem from "../NavbarItem/NavbarItem";
import { data } from "../../data";
const Navbar = () => {
  return (
    <nav className="navbar">
      {data.map(({ id, title, img }) => (
        <NavbarItem key={id} title={title} img={img} />
      ))}
    </nav>
  );
};

export default Navbar;
