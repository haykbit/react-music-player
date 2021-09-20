import "../../styles/colors.scss";

function Navbar() {
  return (
  <div className="nav-container">
      <div className="search">
          <form>
              <input type="text" placeholder="Search..."/>
          </form>
      </div>
  </div>
  );
}

export default Navbar;
