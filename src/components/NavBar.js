

function NavBar() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" >VITALI SHOES</h1>
          
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row ">
            <li className="nav-item">
              <a className="nav-link px-2" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2" href="#store">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
