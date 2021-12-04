import "./NavbarItem.css";
const NavbarItem = ({ img, title }) => {
  return (
    <a className="navbar-item-container" href="/">
      <div className="navbar-item">
        <img
          className="navbar-item-image"
          src={img}
          alt="رستوران"
          width={40}
          height={40}
        />
        <span className="navbar-item-text">{title}</span>
      </div>
    </a>
  );
};

export default NavbarItem;
