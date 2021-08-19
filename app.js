let Name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let submit = document.getElementById("submit")

let Namevalid = false;
let emailvalid = false;
let phonevalid = false;

// $("#warning").hide();
// $("#success").hide();

Name.addEventListener("blur", () => {
    console.log("blurr accured")
    let regex = /(^[a-zA-Z])([0-9a-zA-Z\s]{3,20}$)/;
    let string = Name.value;

    if (regex.test(string)) {
        Name.classList.remove("is-invalid")
        Name.classList.add("is-valid")
        Namevalid = true;
        console.log("matched")
    } else {
        Name.classList.remove("is-valid")
        Name.classList.add("is-invalid")
        console.log("not matched")
    }
})


email.addEventListener("blur", () => {
    console.log("blurr accured")
    let regex = /(^([\_\-\*\+\/0-9a-zA-Z]){1,25}@([0-9a-zA-Z]{2,15}\.[a-zA-Z0-9]{1,10})$)/;
    let string = email.value;

    if (regex.test(string)) {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
        emailvalid = true;
        console.log("matched")
    } else {
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
        console.log("not matched")

    }
})


phone.addEventListener("blur", () => {
    console.log("blurr accured")
    let regex = /(^([0-9]){10}$)/;
    let string = phone.value;

    if (regex.test(string)) {
        phone.classList.remove("is-invalid")
        phone.classList.add("is-valid")
        phonevalid = true;
        console.log("matched")
    } else {
        phone.classList.remove("is-valid")
        phone.classList.add("is-invalid")
        console.log("not matched")

    }
})


submit.addEventListener("click", (e) => {
    e.preventDefault();



    /*
    
    
    below jquery is shortcut for showing alert
        $("#success").show();
    
    
    */

    let html = "";
    let msg = document.getElementById("msg")
    if (Namevalid == true && emailvalid == true && phonevalid == true) {

        // form submitting
        function postdata() {
            let url = "https://reqres.in/api/users"
            let data = `{
            "name": "${Name.value}",
            "email": "${email.value}",
            "phone": "${phone.value}"
        }`
            let params = {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }

            fetch(url, params).then(response => response.json())
                .then(data => console.log(data))
        }

        postdata();

        // $("#success").show();   //this 1 line is enough for showing alert

        html = `  <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong> Your form has been successfully sent</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden='true'>&times;</span>
            </button>
            </div> `

        setTimeout(() => {
            msg.innerHTML = "";
        }, 3000);
        msg.innerHTML += html;

        
    } else {
        let html = "";
        let msg = document.getElementById("msg")
        html = `  <div id="warning" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>You should check in on some of those fields below.</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden='true'>&times;</span>
        </button>
    </div> `

        setTimeout(() => {
            msg.innerHTML = "";
        }, 3000);
        msg.innerHTML += html;
        // console.log("invalid")
    }
})