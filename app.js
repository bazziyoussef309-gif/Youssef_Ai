
let currentMode = "chat";

function setMode(mode) {
  currentMode = mode;

  const names = {
    chat: "AI Chat",
    code: "Coding AI",
    cyber: "Cyber AI",
    image: "Image AI"
  };

  document.getElementById("prompt").placeholder =
    "Ask " + names[mode] + " anything...";
}

function sendMessage() {
  const input = document.getElementById("prompt");
  const text = input.value.trim();

  if (!text) return;

  document.getElementById("welcome").style.display = "none";

  const messages = document.getElementById("messages");

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = text;

  messages.appendChild(userMessage);

  const aiMessage = document.createElement("div");
  aiMessage.className = "message ai";
  aiMessage.textContent =
    "Welcome to YOUSSEF AI! Your message was received. " +
    "Connect an AI API to activate real AI responses.";

  messages.appendChild(aiMessage);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

function newChat() {
  document.getElementById("messages").innerHTML = "";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("prompt").value = "";
}

document.getElementById("prompt").addEventListener("keydown", function(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
