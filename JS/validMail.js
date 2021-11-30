function extractEmails(input) {
	let pattern = /\s([a-z]+\.?[a-z]+-?\w+@[a-z]+-?\w*\.?[a-z]*-?\w*\.[a-z]{2,})/gm;

			let email = pattern.exec(input);
	while (	email !== null) {

		console.log(email[1]);
		email = pattern.exec(input);
		}
	
	}
    extractEmails(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.`);