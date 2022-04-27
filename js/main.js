// Chiedi all’utente il suo nome,
const names= prompt("Inserisci il tuo nome");
// poi chiedi il suo cognome,
const surname= prompt("Inserisci il tuo cognome");
// poi chiedi il suo colore preferito
const color= prompt("Inserisci il tuo colore preferito");
// Infine scrivi sulla pagina nomecognomecolorepreferito21
const psw= `${names}${surname}${color}21`;
console.log(psw)

document.getElementById("name").innerHTML+= names;
document.getElementById("surname").innerHTML+= surname;
document.getElementById("psw").innerHTML= psw;