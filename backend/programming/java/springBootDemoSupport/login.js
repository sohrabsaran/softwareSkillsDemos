export function initLoginScript(passwordKey, buttonId, homePageRelativeUrl) {
  //Ensure that on login page, we are not already logged in!
  //TODO: use JWT token instead of storing the password.
  localStorage.removeItem(passwordKey);
  const button = document.getElementById(buttonId);
  button.addEventListener("click", onLoginButtonClicked);
}

function onLoginButtonClicked(){
    //TODO: call the login endpoint
    localStorage.setItem(passwordKey,"dummyPassword");
    //Go to the home page
    window.location.href = homePageRelativeUrl;
}
