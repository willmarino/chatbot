// to be added to the html near the top of the body
<div class='message-box'>
  <p class='message'>I am the first message</p>
  <div class='message-box-buttons'>
    <div class='message-box-button-decr'>decrement</div>
    <div class='message-box-button-incr'>increment</div>
  </div>
</div>

// js to be run

const messages = [
  <p class='message'>I am the first message</p>,
  <p class='message'>I am the second message</p>,
  <p class='message'>I am the third message</p>,
  <p class='message'>I am the fourth message</p>
]

let messageNumberIdentifier = 0;
let currentMessage = messages[messageNumberIdentifier];

const messageBox = document.getElementsByClassName('message-box')[0];
const incrementMessageButton = document.getElementsByClassName('message-box-button-incr');
const decrementMessageButton = document.getElementsByClassName('message-box-button-incr');
