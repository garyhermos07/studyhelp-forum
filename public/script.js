const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value; 

    const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
        window.location.href = "dashboard.html";
    }
});
