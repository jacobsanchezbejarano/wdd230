// Select the HTML element to manipulate
const date = document.querySelector("#date");
// Try to complete the method with options

	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
	};
	date.textContent = "Last Updated: " + new Date().toLocaleDateString("en-UK", options);
