const writeBtn = document.querySelector(".communication");
const messageBlock = document.querySelector(".message");
const closeMessageBlock = document.querySelector(".close-message-btn");
const input = document.querySelector(".write-message");
const sendMessageBtn = document.querySelector(".send-message-btn");

const messages = [];

function calculateMargin() {
  return messages.reduce((acc, num) => acc + num, 0);
}

function pushMessagesArr(message) {
  messages.push(message.clientHeight + 10);
}

function createMessage(messageName, innerHTML, ...classes) {
  messageName.innerHTML = innerHTML;
  for (let i = 0; i < classes.length; i++) {
    messageName.classList.add(classes[i]);
  }
  messageBlock.appendChild(messageName);

  pushMessagesArr(messageName);
}

let a = 0;

writeBtn.addEventListener("click", () => {
  messageBlock.style.bottom = 0;

  if (a === 0) {
    a = 1;

    const firstMessage = document.createElement("div");
    firstMessage.classList.add("bot-message");
    firstMessage.classList.add("chat-message");
    firstMessage.innerHTML = "Здравствуйте!";
    messageBlock.appendChild(firstMessage);

    pushMessagesArr(firstMessage);

    // createMessage(firstMessage, 'Здравствуйте!', 'bot-message', 'chat-message')

    let sendMessage = setInterval(() => {
      firstMessage.style.left = 10 + "px";

      const secondMessage = document.createElement("div");
      secondMessage.classList.add("bot-message");
      secondMessage.classList.add("chat-message");
      secondMessage.innerHTML = "Какой у вас вопрос?";
      messageBlock.appendChild(secondMessage);

      secondMessage.style.top = 20 + calculateMargin() + "px";

      pushMessagesArr(secondMessage);

      clearInterval(sendMessage);

      let sendSecondMessage = setInterval(() => {
        secondMessage.style.left = 10 + "px";
        clearInterval(sendSecondMessage);
      }, 800);
    }, 300);
  }
});

writeBtn.click();

sendMessageBtn.addEventListener("click", () => {
  if (a === 1) {
    if (input.value === "") {
      return;
    }
    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = input.value;
    input.value = "";

    userMessage.style.top = 20 + calculateMargin() + "px";

    pushMessagesArr(userMessage);

    a = 2;

    messageBlock.appendChild(userMessage);

    sendMessageBtn.style.background = "#828282";
    sendMessageBtn.style.cursor = "alias";

    let sendUserMessage = setInterval(() => {
      userMessage.style.right = 10 + "px";

      const botAnswer = document.createElement("div");
      botAnswer.classList.add("chat-message");
      botAnswer.classList.add("bot-message");
      botAnswer.innerHTML =
        "Для более точного ответа свяжитесь со мной через телеграм: @ahahclassicck";
    //   botAnswer.style.top = 50 + calculateMargin() + "px";
      messageBlock.appendChild(botAnswer);

    //   let sendBotAnswer = setInterval(() => {
    //   }, 100);
    }, 100);
  }
});

closeMessageBlock.addEventListener("click", () => {
  messageBlock.style.bottom = -50 + "%";
});
