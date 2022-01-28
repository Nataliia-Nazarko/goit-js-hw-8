import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const email = document.querySelector('input[name=email]');
const message = document.querySelector('textarea[name=message]')

const input = {email, message};
    
input.insertAdjacentHTML('input', newInput);   
    
function newInput({ email, message }) {
    const key = localStorage.getItem(KEY);

    if (key) {
    player.setCurrentTime(parseFloat(key));
    }
 }