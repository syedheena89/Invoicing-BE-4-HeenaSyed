import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Invoice App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Invoices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/newInvoice">
                New Invoice
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group">
            <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">SignUp/Login</button>
            <div className="dropdown-menu">
                <a href="/signup" className="dropdown-item">Signup</a>
                <a href="/login" className="dropdown-item">Login</a>
            </div>
        </div>
      </div>
    </nav>
  );
}
