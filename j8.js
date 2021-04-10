const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }

    if (message.includes('hello')) {
        speech.text = "Hiiii!! Welcome to our Website";
      }
      if (message.includes('good')) {
        speech.text = "That's Nice";
      }
    if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }

    if (message.includes('weather')) {
      speech.text = "Of course. Where are you currently?";
    }

    if (message.includes('one')) {
      speech.text = "What is Your Query?"
    }
    if (message.includes('1')) {
        speech.text = "What is Your Query?"
      }
    if (message.includes('Apple')) {
        speech.text = "Like most fruit-producing plants, apples want as much sun as they can get to grow their best. They’ll need at least six hours of sun each day, preferably in a location where they are spared the worst of the summertime late-afternoon sun."
      }
      if (message.includes('Mango')) {
        speech.text = "You can plant mango trees year-round, but the best time time to plant a mango tree is in autumn. Start by digging a hole and incorporating added organic matter such as compost or rotted cow manure. After planting the sapling to the same depth as its original container, form a mound around it to improve drainage and encourage establishment. Water it well and mulch with hay."
      }
    

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});