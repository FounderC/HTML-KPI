var feedbackbutton = document.getElementById("Feedback Button");
feedbackbutton.addEventListener("click", async function(event) {
    event.preventDefault();
    var data = getFeedBackData();
    var response = await fetch('/feedbackdata', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    var responseText = await response.text();
    console.log(responseText);
});

function getFeedBackData() {
    var data = {
       name: (function() {
            var useranswer = document.getElementById("Name");
            return useranswer.value;
        })(),
        email: (function() {
            var useranswer = document.getElementById("Email");
            return useranswer.value;
        })(),
        subject: (function() {
            var useranswer = document.getElementById("Subject");
            return useranswer.value;
        })(),
        massage: (function() {
            var useranswer = document.getElementById("Massage");
            return useranswer.value;
        })(),
    }
    return data;
}