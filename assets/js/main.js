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

// Select email-list from html
const emailListElement = document.getElementById("email-list");

// Fetch the list from api
const randomMailEndpoint =
	"https://flynn.boolean.careers/exercises/api/random/mail";

// For each
// - build a list item
// - append to email-list element
