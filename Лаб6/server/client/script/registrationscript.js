var registrationbutton = document.getElementById("Registration Button");
registrationbutton.addEventListener("click", async function(event) {
    event.preventDefault();
    getRegistrationData();
    var data = getRegistrationData();
    var response = await fetch('/registrationdata', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    var responseText = await response.text();
    console.log(responseText);
});

function getRegistrationData() {
    var data = {
       firstname: (function() {
            var useranswer = document.getElementById("First Name");
            return useranswer.value;
        })(),
       lastname: (function() {
            var useranswer = document.getElementById("Last Name");
            return useranswer.value;
        })(),
       sex: (function() {
            var useranswer = "";
            var elements = document.getElementsByName("Sex")
            for(var i=0;i<elements.length;i++)
            {
                if(elements[i].checked)
                {
                    var useranswer = elements[i].value;
                }
            }
            return useranswer;
        })(),
       age: (function() {
            var useranswer = document.getElementById("Age");
            return useranswer.value;
        })(),
       date: (function() {
            var useranswer = document.getElementById("Date");
            return useranswer.value;
        })(),
        country: (function() {
            var useranswer = document.getElementById("Country");
            return useranswer.value;
        })(),
        tel: (function() {
            var useranswer = document.getElementById("Telephone number");
            return useranswer.value;
        })(),
        socialnetwork: (function() {
            var useranswer = document.getElementById("Social Network");
            return useranswer.value;
        })(),
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


