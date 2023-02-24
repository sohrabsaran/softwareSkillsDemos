export function initLoginScript(passwordKey_, buttonId_, homePageRelativeUrl_) {
  passwordKey = passwordKey_;
  buttonId = buttonId_;
  homePageRelativeUrl = homePageRelativeUrl_;
  //Ensure that on login page, we are not already logged in!
  //TODO: use JWT token instead of storing the password.
  localStorage.removeItem(passwordKey);
  const button = document.getElementById(buttonId);
  button.addEventListener("click", onLoginButtonClicked);
}
let passwordKey;
let buttonId;
let homePageRelativeUrl;

function onLoginButtonClicked(){
    //TODO: call the login endpoint
    localStorage.setItem(passwordKey,"dummyPassword");
    //Go to the home page
    window.location.href = homePageRelativeUrl;
}
