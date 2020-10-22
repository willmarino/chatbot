// code for help button which is clicked to display help box

const helpButton = document.getElementById('help-button-container');
const closeButton = document.getElementById('close-help-box-button');

const messageBox = document.getElementById('help-box-container');
const incrementMessageButton = document.getElementById('next-message-button');
const decrementMessageButton = document.getElementById('prev-message-button');


helpButton.addEventListener('click', () => {
  openHelpDisplay();
})

closeButton.addEventListener('click', () => {
  closeHelpDisplay();
  resetMessages();
})

const openHelpDisplay = () => {
  helpButton.classList.add('hidden-now');
  messageBox.classList.remove('hidden-now');
}

const closeHelpDisplay = () => {
  messageBox.classList.add('hidden-now');
  helpButton.classList.remove('hidden-now');
}


// code for help message box

const messages = [
  'Welcome to my chatbot, need some help?',
  'Have a question about my work experience or education? Enter your question into the chatbox to get some answers.',
  'Alternatively, click one of the subject buttons to begin exploring a topic manually.',
  "Additionally, type 'shortcuts' into the message bar in order to see a list of topics to ask me about."
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
const resetMessages = () => {
  const message = document.getElementsByClassName('help-box-message')[0];
  message.innerHTML = messages[0];
}

incrementMessageButton.addEventListener('click', () => {
  const message = document.getElementsByClassName('help-box-message')[0];
  message.innerHTML = nextMessage()
})

decrementMessageButton.addEventListener('click', () => {
  const message = document.getElementsByClassName('help-box-message')[0];
  message.innerHTML = prevMessage()
})
