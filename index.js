const responses = [
  "That's interesting!",
  "Tell me more!",
  "I see, go on...",
  "Wow, that's cool!",
  "I agree with you!",
  "That sounds amazing!",
  "Haha, good one!",
  "Hmm, let me think about that...",
  "Absolutely!",
  "I'm not sure about that!",
];

function message() {
  var chat = document.getElementById("chat");
  var msg = document.getElementById("msg");
  if (msg.value.trim() !== "") {
    let randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    chat.innerHTML += "<div class='sender'> You: " + msg.value + "</div><br>";
    chat.innerHTML +=
      "<div class='receiver'> Me: " + randomResponse + "</div><br>";
    msg.value = "";
    chat.scrollTop = chat.scrollHeight;
  }
}
