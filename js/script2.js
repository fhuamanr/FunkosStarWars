$(document).ready(function () {
    $("#contactForm").on("submit", function (event) {
        var form = this;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});