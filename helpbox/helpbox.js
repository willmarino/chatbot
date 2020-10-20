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
let curMsgIndex = 0;
const nextMessage = (curMsgIndex) => {
  if(!curMsgIndex >= messages.length ){
    curMsgIndex += 1;
    return messages[curMsgIndex];
  }
}
const prevMessage = (curMsgIndex) => {
  if(!curMsgIndex <= 0 ){
    curMsgIndex -= 1;
    return messages[curMsgIndex];
  }
}

const incrementMessageButton = document.getElementsByClassName('message-box-button-incr')[0];
const decrementMessageButton = document.getElementsByClassName('message-box-button-decr')[0];

incrementMessageButton.addEventListener('click', () => {
  const messageBox = document.getElementsByClassName('message-box-buttons')[0];
  messageBox.replaceChild(nextMessage, messageBox.childNodes[0])
})

decrementMessageButton.addEventListener('click', () => {
  const messageBox = document.getElementsByClassName('message-box-buttons')[0];
  messageBox.replaceChild(nextMessage, messageBox.childNodes[0])
})
