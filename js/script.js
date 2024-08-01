function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_fdxo5tr";
    const templateID = "template_5gji2h9";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Réinitialiser les champs du formulaire
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            // Afficher le message de succès
            const successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
            setTimeout(() => {
                successMessage.style.display = "none";
                // Rafraîchir la page après 5 secondes
                window.location.reload();
            }, 5000); // Afficher pendant 5 secondes

            console.log(res);
        })
        .catch(err => {
            // Afficher le message d'erreur
            const errorMessage = document.getElementById("error-message");
            errorMessage.style.display = "block";
            setTimeout(() => {
                errorMessage.style.display = "none";
                // Rafraîchir la page après 5 secondes
                window.location.reload();
            }, 5000); // Afficher pendant 5 secondes

            console.log(err);
        });
}