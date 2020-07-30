const loadpage = document.getElementById("loadpage");
// window.addEventListener("load", function () {
//   loadpage.style.display = "none";
// });
setTimeout(function () {
  loadpage.style.height = "0";
  loadpage.style.pointerEvents = "none";
}, 1000);

// var dt = new Date();
// var dayName = dt.toString().split(" ")[0];
// document.getElementById("time").innerHTML =
//   ("0" + dt.getHours()).slice(-2) +
//   ":" +
//   ("0" + dt.getMinutes()).slice(-2) +
//   "  " +
//   dayName +
//   "   " +
//   ("0" + dt.getDate()).slice(-2) +
//   "/" +
//   ("0" + (dt.getMonth() + 1)).slice(-2) +
//   "/" +
//   dt.getFullYear();

//-----------------timer----------------

// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;
// setInterval(setTime, 1000);

// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }

let time = moment().format("dddd, MMMM Do YYYY, h:mm A");
document.getElementById("time").innerHTML = time + ".";

// document.getElementById("time").innerHTML = time + ".";
// console.log(time);

function myFunction() {
  setInterval(function () {
    let time = moment().format("dddd, MMMM Do YYYY, h:mm A");
    document.getElementById("time").innerHTML = time + ".";
  }, 60000);
}
myFunction();

// var update = function () {

// };
// setInterval(update, 1000);

// fetch("http://ip-api.com/json/")
//   .then((res) => res.json())
//   .then((response) => {
//     console.log("Country: ", response.country);
//   })
//   .catch((data, status) => {
//     console.log("Request failed");
//   });

var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://api.ipdata.co/?api-key=4a93aefa6ca90f6eda7815a32b3dfad0ce0169c650d323bf9ef90fc1"
);

request.setRequestHeader("Accept", "application/json");

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    // document.getElementById("time").innerHTML = this.responseText;
    let locdata = JSON.parse(this.responseText);
    document.getElementById("location").innerHTML =
      locdata.city + "," + " " + locdata.country_name + ".";
  }
};

request.send();

const info = document.getElementById("info");
const bridge = document.getElementById("bridge");
const logo = document.getElementById("logo");
logo.addEventListener("click", bridgepos);
logo.addEventListener("mouseover", bridgepos);
// logo.addEventListener("mouseout", movebridgex);

function bridgepos() {
  let xd = logo.getBoundingClientRect();
  x = xd.left;
  bridge.style.left = x + 23 + "px";
  bridge.style.height = "1.5rem";
  if (bridge.style.left === x + 23 + "px") {
    bridge.style.width = "1px";
  }
}
bridgepos();

const wl = document.getElementById("wl");
const work = document.getElementById("work");
const about = document.getElementById("about");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");
work.addEventListener("click", movebridge);
work.addEventListener("mouseover", movebridge);
// work.addEventListener("mouseout", movebridgex);
about.addEventListener("click", movebridge1);
about.addEventListener("mouseover", movebridge1);
// about.addEventListener("mouseout", movebridgex);
blog.addEventListener("click", movebridge2);
blog.addEventListener("mouseover", movebridge2);
// blog.addEventListener("mouseout", movebridgex);
contact.addEventListener("click", movebridge3);
contact.addEventListener("mouseover", movebridge3);

// contact.addEventListener("mouseout", movebridgex);

// function movebridgex() {
//   if (workpage.style.opacity === "0") {
//     bridgepos();
//   }
//   if (workpage.style.opacity === "1") {
//     movebridge();
//   }
//   if (aboutpage.style.opacity === "1") {
//     movebridge1();
//   }
//   if (blogpage.style.opacity === "1") {
//     movebridge2();
//   }
//   if (contactpage.style.opacity === "1") {
//     movebridge3();
//   }
// }

// let k = work.getBoundingClientRect();
// p = k.left;
// info.style.setProperty("left", p - 12 + "px");

// setTimeout(function () {
//   info.style.display = "none";
// }, 5000);
const mpad1 = document.getElementById("mpad1");
const mpad2 = document.getElementById("mpad2");
const mpad3 = document.getElementById("mpad3");
const mpad4 = document.getElementById("mpad4");
let xwd = work.getBoundingClientRect();
xw = xwd.left;
mpad1.style.left = xw - 10 + "px";
mpad1.addEventListener("mouseover", movebridge);
mpad1.addEventListener("mouseover", displayworkpage);
function movebridge() {
  // bridge.style.left = x + 22 + "px";
  // info.style.left = x + "px";
  let xd = work.getBoundingClientRect();
  x = xd.left;
  bridge.style.left = x + 22 + "px";
  bridge.style.transitionDelay = "0s";

  aboutin.style.display = "none";
}

const aboutin = document.getElementById("aboutin");
const line1 = document.getElementById("line1");
const name1 = document.getElementById("name");
const line2 = document.getElementById("line2");
const profile = document.getElementById("profile");
// const procon = document.getElementById("procon");
const line3 = document.getElementById("line3");
const intro = document.getElementById("intro");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");

let x1d = about.getBoundingClientRect();
x1 = x1d.left;
mpad2.style.left = x1 - 10 + "px";
mpad2.addEventListener("mouseover", movebridge1);
mpad2.addEventListener("mouseover", displayaboutpage);
function movebridge1() {
  aboutin.style.display = "block";

  let x1d = about.getBoundingClientRect();
  x1 = x1d.left;
  bridge.style.left = x1 + 25 + "px";
  bridge.style.transitionDelay = "0s";
  line1.style.left = x1 + 25 + "px";
  line1.style.height = "3.1rem";
  line1.style.width = "6.6rem";
  name1.style.left = x1 + 136 + "px";
  name1.style.opacity = "1";
  line2.style.left = x1 + 350 + "px";
  line2.style.height = "2rem";
  profile.style.left = x1 + 255 + "px";
  // procon.style.left = x1 + 252 + "px";
  profile.style.opacity = "1";
  line3.style.left = x1 + 355 + "px";
  line3.style.height = "2rem";
  intro.style.left = x1 + 164 + "px";
  intro.style.opacity = "1";
  // line4.style.left = x1 + 25 + "px";
  // line4.style.height = "30rem";
  // line5.style.left = x1 + 25 + "px";
  // line5.style.width = "7rem";
}
let x2d = blog.getBoundingClientRect();
x2 = x2d.left;
mpad3.style.left = x2 - 10 + "px";
mpad3.addEventListener("mouseover", movebridge2);
mpad3.addEventListener("mouseover", displayblogpage);
function movebridge2() {
  aboutin.style.display = "none";
  let x2d = blog.getBoundingClientRect();
  x2 = x2d.left;
  bridge.style.left = x2 + 18 + "px";
  bridge.style.transitionDelay = "0s";
}
let x3d = contact.getBoundingClientRect();
x3 = x3d.left;
mpad4.style.left = x3 - 10 + "px";
mpad4.style.width = "5rem";
mpad4.addEventListener("mouseover", movebridge3);
mpad4.addEventListener("mouseover", displaycontactpage);
function movebridge3() {
  aboutin.style.display = "none";
  let x3d = contact.getBoundingClientRect();
  x3 = x3d.left;
  bridge.style.left = x3 + 34 + "px";
  bridge.style.transitionDelay = "0s";
}

//---------------mainpage--------------
const sierra = document.getElementById("sierra");
const mainpage = document.getElementById("mainpage");
logo.addEventListener("click", displayhomepage);
logo.addEventListener("mouseover", displayhomepage);
function displayhomepage() {
  mainpage.style.opacity = "1";
  mainpage.style.pointerEvents = "all";
  // workpage.style.height = "0";
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  aboutpage.style.opacity = "0";
  // aboutpage.style.height = "0";
  aboutpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  // blogpage.style.height = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  // contactpage.style.height = "0";
  contactpage.style.pointerEvents = "none";
}

//---------------workpage--------------
const workpage = document.getElementById("workpage");
const awork = document.getElementById("awork");
awork.addEventListener("click", displayworkpagex);
awork.addEventListener("mouseover", displayworkpage);
// awork.addEventListener("mouseout", hideworkpage);

function displayworkpagex() {
  workpage.style.opacity = "1";
  workpage.style.pointerEvents = "all";
}
function displayworkpage() {
  workpage.style.height = "91vh";
  workpage.style.opacity = "1";
  workpage.style.pointerEvents = "all";
  // hidecontactpage();
  // hideaboutpage();
  // hideblogpage();
  aboutpage.style.opacity = "0";
  aboutpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  contactpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
}
function hideworkpage() {
  if (workpage.style.pointerEvents === "all") {
  } else {
    workpage.style.opacity = "0";
    workpage.style.pointerEvents = "none";
  }
}

//---------------aboutpage--------------
const aboutpage = document.getElementById("aboutpage");
const aabout = document.getElementById("aabout");
aabout.addEventListener("click", displayaboutpagex);
aabout.addEventListener("mouseover", displayaboutpage);
// aabout.addEventListener("mouseout", hideaboutpage);

function displayaboutpagex() {
  aboutpage.style.opacity = "1";
  aboutpage.style.pointerEvents = "all";
}
function displayaboutpage() {
  aboutpage.style.height = "91vh";
  aboutpage.style.opacity = "1";
  aboutpage.style.pointerEvents = "all";
  // hideworkpage;
  // hidecontactpage();
  // hideaboutpage();
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  contactpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
}
function hideaboutpage() {
  if (aboutpage.style.pointerEvents === "all") {
  } else {
    aboutpage.style.opacity = "0";
    aboutpage.style.pointerEvents = "none";
  }
}

//---------------blogpage--------------
const blogpage = document.getElementById("blogpage");
const ablog = document.getElementById("ablog");
ablog.addEventListener("click", displayblogpagex);
ablog.addEventListener("mouseover", displayblogpage);
// ablog.addEventListener("mouseout", hideblogpage);

function displayblogpagex() {
  blogpage.style.opacity = "1";
  blogpage.style.pointerEvents = "all";
}
function displayblogpage() {
  blogpage.style.height = "91vh";
  blogpage.style.opacity = "1";
  blogpage.style.pointerEvents = "all";
  // hideworkpage();
  // hideaboutpage();
  // hidecontactpage();
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  aboutpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  contactpage.style.opacity = "0";
  contactpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
}
function hideblogpage() {
  if (blogpage.style.pointerEvents === "all") {
  } else {
    blogpage.style.opacity = "0";
    blogpage.style.pointerEvents = "none";
  }
}

//---------------contactpage--------------
const lets = document.getElementById("lets");
lets.addEventListener("click", movebridgelets);
function movebridgelets() {
  let x2d = contact.getBoundingClientRect();
  x2 = x2d.left;
  bridge.style.left = x2 + 34 + "px";
  bridge.style.transitionDelay = "0s";
}
lets.addEventListener("click", displaycontactpage);
const contactpage = document.getElementById("contactpage");
const acontact = document.getElementById("acontact");
acontact.addEventListener("click", displaycontactpagex);
acontact.addEventListener("mouseover", displaycontactpage);
// acontact.addEventListener("mouseout", hidecontactpage);
const bus1 = document.getElementById("business1");
const bus2 = document.getElementById("business2");
function displaycontactpagex() {
  contactpage.style.opacity = "1";
  contactpage.style.pointerEvents = "all";
}
function displaycontactpage() {
  contactpage.style.height = "91vh";
  contactpage.style.opacity = "1";
  contactpage.style.pointerEvents = "all";
  // hideworkpage();
  // hideaboutpage();
  // hideblogpage();
  workpage.style.opacity = "0";
  workpage.style.pointerEvents = "none";
  aboutpage.style.opacity = "0";
  aboutpage.style.pointerEvents = "none";
  blogpage.style.opacity = "0";
  blogpage.style.pointerEvents = "none";
  mainpage.style.opacity = "0";
  mainpage.style.pointerEvents = "none";
  bridge.style.transitionDelay = "0s";
  bus1.className = "business";
  bus2.className = "business";
}
function hidecontactpage() {
  if (contactpage.style.pointerEvents === "all") {
  } else {
    contactpage.style.opacity = "0";
    contactpage.style.pointerEvents = "none";
  }
}

// mainpage.addEventListener("wheel", scroll1);
// function scroll1(event) {
//   event.preventDefault();

//   if (event.deltaY > 0) {
//     displayworkpage();
//     movebridge();

//   } else {
//     console.log("up");
//   }
// }

// workpage.addEventListener("wheel", scroll2);

// function scroll2(event) {
//   event.preventDefault();

//   if (event.deltaY > 0) {
//     displayaboutpage();
//     movebridge1();
//   } else {
//     displayhomepage();
//     bridgepos();
//   }
// }

// aboutpage.addEventListener("wheel", scroll3);

// function scroll3(event) {
//   event.preventDefault();

//   if (event.deltaY > 0) {
//     displayblogpage();
//     movebridge2();
//   } else {
//     displayworkpage();
//     movebridge();
//   }
// }

// blogpage.addEventListener("wheel", scroll4);

// function scroll4(event) {
//   event.preventDefault();

//   if (event.deltaY > 0) {
//     displaycontactpage();
//     movebridge3();
//   } else {
//     displayaboutpage();
//     movebridge1();
//   }
// }

// contactpage.addEventListener("wheel", scroll5);

// function scroll5(event) {
//   event.preventDefault();

//   if (event.deltaY > 0) {
//   } else {
//     displayblogpage();
//     movebridge2();
//   }
// }
