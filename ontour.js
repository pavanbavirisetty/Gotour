var slideindex = 0;
showslides();
function showslides() {
  var slide = document.getElementsByClassName("myslides");
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slide.length) {
    slideindex = 1;
  }
  slide[slideindex - 1].style.display = "block";
  setTimeout(showslides, 2000);
  // AnimationTimeline(showslides, 1000);
}

function visible() {
  var x = document.querySelector("#password1");
  if (x.type === "password") {
    x.type = "text";
    document.querySelector("#eyeshow").style.display = "block";
    document.querySelector("#eyeslash").style.display = "none";
  } else {
    x.type = "password";
    document.querySelector("#eyeshow").style.display = "none";
    document.querySelector("#eyeslash").style.display = "block";
  }
}

function login_page() {
  console.log("vvv");
  //  window.location.href = "file:///G:/gotour/pavan.html";
  // let login_id = {
  //   userid: "pavanbavirisetty@gmail.com",
  //   password: "nohara@19",
  // };
  // var l = document.querySelector("#userid");
  // var m = document.querySelector("#password1");
  // if (login_id.userid === l) {
  //      if (login_id.password === m) {
  //        window.location.href = "pavan.html";
  //      }
  // }
}
