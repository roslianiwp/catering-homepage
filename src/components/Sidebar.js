import "../App.css";

function Sidebar({ isClicked }) {
  return (
    <div
      className={`${isClicked ? "sidebar-widget-clicked" : "sidebar-widget"}`}
    >
      <a href="#">
        <i className="far fa-comment-alt"></i>
      </a>
      <a href="#">
        <i className="far fa-life-ring"></i>
      </a>
      <a href="#">
        <i className="far fa-file-alt"></i>
      </a>
      <a href="#">
        <i className="fas fa-video"></i>
      </a>
      <a href="#">
        <i className="fas fa-user-friends"></i>
      </a>
      <a href="#" className="cart">
        <i className="fa fa-shopping-cart" style={{ color: "green" }}></i>
      </a>
    </div>
  );
}

export default Sidebar;
