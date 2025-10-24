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

function resetElement(element) {
	element.innerHTML = "";
}

function showSpinner(element) {
	resetElement(element);
	element.innerHTML += `<svg width="24" height="24" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>`;
}

/*
// With fetch
function fetchEmails(endpoint, number) {
	for (let i = 0; i < number; i++) {
		fetch(endpoint)
			.then((response) => response.json())
			.then((result) => {
				const { success, response } = result;
				if (success) {
					console.log(response);
					printListItem(emailListElement, response);
				}
			});
	}
}
*/

/*
// With Axios
function fetchEmails(endpoint, number) {
	resetElement(emailListElement);
	for (let i = 0; i < number; i++) {
		axios.get(endpoint).then((result) => {
			const { success, response } = result.data;
			if (success) {
				console.log(response);
				printListItem(emailListElement, response);
			}
		});
	}
}
*/

// With async await
async function fetchEmails(endpoint, number) {
	showSpinner(emailListElement);
	const emailList = [];
	for (let i = 0; i < number; i++) {
		const promise = await axios.get(endpoint);
		const { success, response } = promise.data;
		if (success) {
			emailList.push(response);
		}
	}

	resetElement(emailListElement);
	emailList.forEach((current) => {
		console.log(current);
		printListItem(emailListElement, current);
	});
}

// Select email-list from html
const emailListElement = document.getElementById("email-list");

// Select button
const generateButtonElement = document.getElementById("button-generate");

// Fetch the list from api
const randomMailEndpoint =
	"https://flynn.boolean.careers/exercises/api/random/mail";

fetchEmails(randomMailEndpoint, 10);

generateButtonElement.addEventListener("click", () =>
	fetchEmails(randomMailEndpoint, 10),
);
