import "../App.css";

function Navbar({ isClicked, clickIt }) {
  return (
    <>
      <nav className="navbar-desktop">
        <div>
          <a href="#">
            Demos <i className="fas fa-angle-down"></i>
          </a>
          <a href="#">
            Pages <i className="fas fa-angle-down"></i>
          </a>
          <a href="#">
            Portfolio <i className="fas fa-angle-down"></i>
          </a>
        </div>
        <div className="right-navbar">
          <i className="fas fa-shopping-cart icon"></i>
          <i className="fa fa-search"></i>
          <input type="text" name="search" className="searchbox"></input>
        </div>
      </nav>

      <nav className="navbar-mobile">
        <i className="fa fa-search"></i>
        <i className="fas fa-shopping-cart icon"></i>
        <i className="fa fa-bars" onClick={() => clickIt(!isClicked)}></i>
      </nav>
    </>
  );
}

export default Navbar;
