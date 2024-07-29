function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_fdxo5tr , service_etcj0hr";
    const templateID = "template_5gji2h9";
    emailjs.send(serviceID, templateID, params)

        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Message sent successfully");
            }
        )
        .catch(err => console.log(err));

}