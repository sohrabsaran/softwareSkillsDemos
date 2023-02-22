window.addEventListener("DOMContentLoaded", init, false);

//TODO: redirect to /admin/login url if user is not logged in.

function init() {
  // Create the html to insert
  const html = /*html*/ `
   <nav class="navbar navbar-expand-lg" style="background:#ffcccc">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">XYZ (admin site)</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!--
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            -->
            <li class="nav-item">
              <a class="nav-link" href="/admin/theatres">Theatres</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/movies">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/tickets">Tickets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/tickets">Tickets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/payments">Payments</a>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item align-text-right">
              <a class="nav-link" href="#" id="logoutLink">Logout</a>
            </li>
            <!--
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
            -->
          </ul>
          <!--
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          -->
        </div>
      </div>
    </nav>
`;
  document.body.insertAdjacentHTML("afterbegin", html);

  waitForElement("logoutLink", (/** @type {HTMLElement} */ el) => {
    el.addEventListener("click", () => {
      localStorage.removeItem("adminLoginId");
      localStorage.removeItem("adminLoginPassword");
      window.location.href = "/admin/login";
    });
  });
}

/**
 * @param {string} id
 * @param {(el: HTMLElement)=>void} thenFunction
 */
function waitForElement(id, thenFunction) {
  const el = document.getElementById(id);
  if (el == null) {
    setTimeout(() => {
      waitForElement(id, thenFunction);
    }, 300);
  } else {
    thenFunction(el);
  }
}
