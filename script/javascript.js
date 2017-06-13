var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var cancel = document.querySelector(".cancel");
var form = popup.querySelector("form");
var username = popup.querySelector("[name='name']");
var usermail = popup.querySelector("[name='mail']");
var mailtext = popup.querySelector("textarea");
var storage = localStorage.getItem("name");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
  username.value = storage;
  usermail.focus();
} else {
  username.focus();
}
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!(username.value && usermail.value && mailtext.value)) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("user-name", username.value);
    }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9390025,30.3198056)
}
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var image1 = "img/mark_logo.png";
  var myLatlng = new google.maps.LatLng(59.938512, 30.323459);
  var beachMarker = new google.maps.Marker({
    position: myLatlng,
  map: map,
  icon: image1
});
}
  google.maps.event.addDomListener(window, 'load', initialize);
