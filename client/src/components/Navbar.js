import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../context/searchContext";

function Navbar() {
  const { searchQuery, updateSearchQuery } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();

    if (location.pathname === "/Books") {
      navigate(`/Books?search=${searchQuery}`);
    } else if (location.pathname === "/Notes") {
      navigate(`/Notes?search=${searchQuery}`);
    } else if (location.pathname === "/PYQs") {
      navigate(`/PYQs?search=${searchQuery}`);
    } else {
      alert("Search is only available on Books, Notes, or PYQs pages.");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
        <div className="container-xxl">
          <a href=" " className="navbar-brand">
            <span className="fw-bold text-light">
              <i className="bi bi-person-circle"></i> eXAMhELP
            </span>
          </a>
          {/* Show search bar only on /Books, /Notes, or /PYQs */}
          {["/Books", "/Notes", "/PYQs"].includes(location.pathname) && (
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="bi bi-house-door-fill d-none d-md-inline"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Notes" className="nav-link">
                  <i className="bi bi-file-earmark-person d-none d-md-inline"></i>
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/PYQs" className="nav-link">
                  <i className="bi bi-info-circle-fill d-none d-md-inline"></i>
                  PYQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Books" className="nav-link">
                  <i className="bi bi-upload d-none d-md-inline"></i>
                  Books
                </Link>
              </li>
              <li className="nav-item ms-2 mt-1 d-none d-md-inline">
                <Link
                  to="/Contribute"
                  className="btn btn-md btn-warning fw-bold"
                >
                  <i className="bi bi-person-workspace d-none d-md-inline"></i>
                  Contribute Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;