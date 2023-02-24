const passwordStorageKey = 'theatrePassword';
const baseUrl = '/theatres';
const brandName = 'XYZ'
if(localStorage.getItem(passwordStorageKey)==null) {
  localStorage.setItem('pageThatRedirectedToAdminLogin',window.location.href);
  window.location.href = `${baseUrl}/login`;
} else {
  window.addEventListener("DOMContentLoaded", init, false);  
}

function init() {
  // Create the html to insert
  const html = /*html*/ `
   <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">${brandName}</a>
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
              <a class="nav-link active" aria-current="page" href="/example-url">ExampleMenuItemName</a>
            </li>
            -->
            <li class="nav-item">
              <a class="nav-link" href="${baseUrl}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/movieSchedules">Movie Schedules</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/movieTimetables">Movie Timetables</a>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item align-text-right">
              <a class="nav-link" href="/theatres/login" id="logoutLink">Logout</a>
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
}
