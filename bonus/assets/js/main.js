/**
 * Email List
 *
 * Attraverso l'apposita API di Boolean
 * https://flynn.boolean.careers/exercises/api/random/mail
 * generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 *
 * Bonus
 * Abbellire con CSS o Bootstrap
 * Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
 */

function printListItem(element, item) {
	element.innerHTML += `<li>${item}</li>`;
}

// Select email-list from html
const emailListElement = document.getElementById("email-list");

// Select button
const generateButtonElement = document.getElementById("button-generate");

// Fetch the list from api
const randomMailEndpoint =
	"https://flynn.boolean.careers/exercises/api/random/mail";

// With fetch
for (let i = 0; i < 10; i++) {
	fetch(randomMailEndpoint)
		.then((response) => response.json())
		.then((result) => {
			const { success, response } = result;
			if (success) {
				console.log(response);
				printListItem(emailListElement, response);
			}
		});
}
