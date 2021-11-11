const myFunction = () => {
  var x = document.getElementById("myDIV");
  var btn = document.getElementById("show");
    if (x.style.display === "none") {
      x.style.display = "flex";
      btn.innerHTML = "Tampilkan lebih sedikit"
    } else {
      x.style.display = "none";
      btn.innerHTML = "Lihat Selengkapnya";
    }
};
const myFunctions = () => {
  var x = document.getElementById("tabWebinar");
  var btn = document.getElementById("show2");
    if (x.style.display === "none") {
      x.style.display = "flex";
      btn.innerHTML = "Tampilkan lebih sedikit"
    } else {
      x.style.display = "none";
      btn.innerHTML = "Lihat Selengkapnya";
    }
};
const myWebinar = () => {
    var webinar = document.getElementById("myWebinar");
    var x = document.getElementById("myDIV");
    var btn = document.getElementById("show");
     var btn2 = document.getElementById("show2");
    var zoomMeeting = document.getElementById("myZoom");
      webinar.style.display = "flex";
      zoomMeeting.style.display = "none"
      btn.style.display = "none";
      x.style.display = "none";
      btn2.style.display = "flex"
};
const myZoom = () => {
    var webinar = document.getElementById("myWebinar");
    var zoomMeeting = document.getElementById("myZoom");
    var x = document.getElementById("myDIV");
    var btn = document.getElementById("show");
    var btn2 = document.getElementById("show2");
      webinar.style.display = "none";
      zoomMeeting.style.display = "flex"
      btn.style.display = "flex";
      btn2.style.display = "none"
    //   x.style.display = "flex";
};

var btnContainer = document.getElementById("navbarNavAltMarkup");

var btns = btnContainer.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    
  });
}
