document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageEl = document.getElementById("message");

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        messageEl.innerText = data.message;
        if (response.ok) {
            messageEl.style.color = "green";
        } else {
            messageEl.style.color = "red";
        }
    } catch (error) {
        messageEl.innerText = "Server error. Please try again later.";
        messageEl.style.color = "red";
    }
});
