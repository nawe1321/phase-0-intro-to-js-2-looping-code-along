// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, type) {
    const thankyouMessages = [];
    for (let i =0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${type} gift!`;
        thankyouMessages.push(message);
    }
    return thankyouMessages;

}
writeCards(names,'surprise');

function countDown(integer) {
    let number = 0;
    while (number <= integer) {
        console.log(integer--);
    }
}
countDown(10);