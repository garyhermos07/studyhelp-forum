const loginForm = document.querySelector("form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e){
        e.preventDefault();
    
    window.location.href = "dashboard.html";
 });
}
