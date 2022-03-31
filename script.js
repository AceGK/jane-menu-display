let menuLoc = location.search;
let url = location.pathname + location.search;
let storeID = menuLoc.substring(menuLoc.lastIndexOf("=") + 1);

if (
  window.location.toString().includes("?location") &&
  url === 
//   "/shop/" + 
  menuLoc

) {
  document.getElementById("jane-frame-script").src =
    "https://api.iheartjane.com/v1/stores/" + storeID + "/embed.js";
} else {
  document.getElementById("jane-frame-script").src =
    "https://api.iheartjane.com/v1/operators/292/embed.js";
}
