window.onload = () => {
  // Inladen van de elementen voor het Menu
  const menuButton = document.getElementById("js--menuButton");
  const navList = document.getElementById("js--navList");

  // Click event op menuButton --> Toggle het menu
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("header__nav__list--active");
  })

  if(window.location.pathname == "/"){
    // Inladen van elementen voor productPopup
    const popupOverlay = document.getElementById("js--popupOverlay");
    const popupHeading = document.getElementById("js--popupHeading");

    // Voor elke popupButton --> Toggle popup
    const popupButtons = document.getElementsByClassName("js--popupButton");
    for(i = 0; i < popupButtons.length; i++){
      popupButtons[i].addEventListener("click", () => {
        popupOverlay.classList.toggle("popupOverlay--active");
        popupHeading.focus();
      })
    }

    // Voor de close button
    const popupClose = document.getElementById("js--popupClose");
    popupClose.addEventListener("click", () => {
      popupOverlay.classList.toggle("popupOverlay--active");
    })
  }
}
