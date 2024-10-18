const toggler = document.querySelector(".header-toggler");
const menu = document.querySelector(".header-menu");
const menuItems = document.querySelectorAll(".header-menu__item");

toggler.addEventListener("click", () => {
  menu.classList.toggle("header-menu--open");
  toggler.classList.toggle("header-toggler--open");
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove("header-menu--open");
    toggler.classList.remove("header-toggler--open");
  });
});

// Chat assistance - help users
let openChat = document.querySelector(".help-picture");
let itemChat = document.querySelector(".chat-container");
let closeChat = document.querySelector(".chat-window__close");

if (openChat !== null) {
  setTimeout(() => {
    openChat.classList.add("visible-block");
  }, 2000);

  closeChat.addEventListener("click", function () {
    itemChat.classList.remove("visible-block");
    itemChat.classList.remove("hidden-block");
  });

  openChat.addEventListener("click", function () {
    itemChat.classList.toggle("visible-block");
  });

  document.getElementById("sendButton").addEventListener("click", function () {
    const chatInput = document.getElementById("chatInput");
    const chatWindow = document.getElementById("chatWindow");

    const message = chatInput.value;

    if (message.trim()) {
      const userMessage = document.createElement("div");
      userMessage.classList.add("chat-message");
      userMessage.textContent = message;

      chatWindow.appendChild(userMessage);

      const systemMessage = document.createElement("div");
      systemMessage.classList.add("chat-message");
      systemMessage.innerHTML = `"Thank you, your message has been accepted. We will contact you as soon as our specialist is available."`;

      chatWindow.appendChild(systemMessage);

      chatWindow.scrollTop = chatWindow.scrollHeight;

      chatInput.value = "";
    }
  });
}

if (document.getElementById("commentForm") !== null) {
  document
    .getElementById("commentForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const rating = document.getElementById("rating").value;
      const comment = document.getElementById("comment").value;

      const commentItem = document.createElement("li");
      commentItem.classList.add("comment-item");

      commentItem.innerHTML = `
      <h3>${username}</h3>
      <p class="rating">Avaliação: ${"★".repeat(rating)}</p>
      <p>${comment}</p>
  `;

      document.getElementById("commentsList").appendChild(commentItem);

      document.getElementById("commentForm").reset();
    });
}
