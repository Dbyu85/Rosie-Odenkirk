function sendMail(contactForm) {
	emailjs.send("gmail", "rosie", {
		"form_name": contactForm.fullname.value,
		"form_email": contactForm.emailaddress.value,
		"project_request": contactForm.projectsummary.value
	})
	.then(
		function(response) {
			console.log("SUCCESS", response);
		},
		function(error) {
			console.log("FAILED", error);
		}
	);
}