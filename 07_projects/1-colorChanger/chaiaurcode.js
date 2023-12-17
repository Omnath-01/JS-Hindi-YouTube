const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    const clikBtn = button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'gray') {
            body.style.backgroundColor = 'grey';
        }
    })
});