import "../../styles/navbar/navbar.scss";

function Navbar() {
  return (
  <div className="nav-container">
      <div className="search">
          <div className="circle"></div>
          <form>
              <input type="text" placeholder="Search..."/>
          </form>
      </div>
  </div>
  );
}

export default Navbar;
