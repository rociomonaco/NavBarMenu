

function NavBar() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <h1 class="navbar-brand" >VITALI SHOES</h1>
          
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row ">
            <li class="nav-item">
              <a class="nav-link px-2" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#store">Store</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
