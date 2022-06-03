let text = document.getElementById('text');
let input = document.getElementById('input');
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let main = document.getElementById('main');
let random = Math.floor(Math.random() * 100);

console.log(random);

button1.addEventListener('click', function () {
    let guess = input.value;
    if (guess == random) {
        text.innerHTML = 'Yay, you guessed right! &#x1F603';
        main.classList.add('main')
    }
    else if (guess.length == '' || guess.length == null) {
        text.innerHTML = 'You did not enter anything! &#x1F60F';
    }
    else if (guess > random && guess <= 100) {
        text.innerHTML = 'You guessed too high!';
    }
    else if (guess < random && guess >= 1) {
        text.innerHTML = 'You guessed too low!';
    }
    else if (guess > 100 || guess < 1) {
        text.innerHTML = 'Your guess is out of range! &#x1F612';
    }
    else if (isNaN(guess)) {
        text.innerHTML = 'Your guess is not a number! &#x1F620';
    }
});

button2.addEventListener('click', function () {
    location.reload();
});
