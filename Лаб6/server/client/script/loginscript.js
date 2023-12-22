var loginbutton = document.getElementById("Login Button");
loginbutton.addEventListener("click", async function(event) {
    event.preventDefault();
    getLoginData();
    var data = getLoginData();
    var response = await fetch('/logindata', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    var responseText = await response.text();
    console.log(responseText);
});

function getLoginData() {
    var data = {
        email: (function() {
            var useranswer = document.getElementById("Email");
            return useranswer.value;
        })(),
        password: (function() {
            var useranswer = document.getElementById("Password");
            return useranswer.value;
        })()
    }
    return data;
}