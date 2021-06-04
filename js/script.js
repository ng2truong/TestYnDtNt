var login = document.getElementById('idlogin');
var signup = document.getElementById('idsignup');
signup.onclick = function (event) {
    if (event.target == signup) {
        signup.style.display = "none";
    }
}
login.onclick = function (event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}
function ReturnLogin() {
    signup.style.display = "none";
    login.style.display = "block";
}
function ReturnSignup() {
    login.style.display = "none";
    signup.style.display = "block";
}

function openLevel(evt, levelName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(levelName).style.display = "block";
    evt.currentTarget.className += " active";
}
  
document.getElementById("defaultOpen").click();