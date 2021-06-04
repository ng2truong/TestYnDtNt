// Xử lý Đăng nhập - Đăng ký
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

// Xử lý thanh Navigation
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

// Xử lý nút cuộn lên đầu trang
// Gán tên biến cho phần tử nút - Get varname for button element
var btn_top = document.getElementById('btn-top');
// Khi người dùng cuộn xuống 20 pixels từ đỉnh trang thì cho hiện nút
window.onscroll = function () {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn_top.style.display = 'block';
    } else {
        btn_top.style.display = 'none';
    }
}
// Khi người dùng kích lên nút, cuộn về đầu trang
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Xử lý rê chuột vào class
var elems = document.querySelectorAll('.kh-sub');
var btn_link = document.getElementById('btn-link');
for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('mousemove', FuncIn, false);
    elems[i].addEventListener('mouseleave', FuncOut, false);
}
function FuncIn() {
    this.style.opacity = 0.5;
}
function FuncOut() {
    this.style.opacity = 1;
}