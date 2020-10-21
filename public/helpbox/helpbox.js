const messages = [
  'I am the first message',
  'I am the second message',
  'I am the third message',
  'I am the fourth message'
]
let curMsgIndex = 0;
const nextMessage = () => {
  if(curMsgIndex < messages.length - 1 ){
    curMsgIndex += 1;
  }
  return messages[curMsgIndex];
}
const prevMessage = () => {
  if(curMsgIndex > 0){
    curMsgIndex -= 1;
  }
  return messages[curMsgIndex];
}

const incrementMessageButton = document.getElementsByClassName('message-box-button-incr')[0];
const decrementMessageButton = document.getElementsByClassName('message-box-button-decr')[0];

incrementMessageButton.addEventListener('click', () => {
  const message = document.getElementsByClassName('message')[0];
  message.innerHTML = nextMessage()
})

decrementMessageButton.addEventListener('click', () => {
  const message = document.getElementsByClassName('message')[0];
  message.innerHTML = prevMessage()
})