const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
	'Im good sir.', 
	'Im fine sir, thank you.', 
	'Fine. How are you today sir?'
];

const weather = [
	'Weather is fine sir.',
	'You going to need an umbrella today sir.'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
	console.log('voice is activted, you can to microphone');
};

recognition.onresult = function(event){
	const current = event.resultIndex;

	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

// add the listener to the btn

btn.addEventListener('click', () => {
	recognition.start();
});


function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();

	speech.text ='Im sorry I cant hear you very well sir.';

	if(message.includes('how are you')){
		const finalText = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}

	if(message.includes('what is the weather today')){
		const finalText = weather[Math.floor(Math.random() * weather.length)];
		speech.text = finalText;
	}

	if(message.includes('open google')){
		const finalText = 'Alright sir';
		speech.text = finalText;

		setTimeout(() => {
			window.open('https://google.com');
		}, 1000);
	}

	if(message.includes('open youtube')){
		const finalText = 'As you wish sir';
		speech.text = finalText;

		setTimeout(() => {
			window.open('https://youtube.com');
		}, 1000);
	}

	if(message.includes('open facebook')){
		const finalText = 'Okay sir';
		speech.text = finalText;

		setTimeout(() => {
			window.open('https://facebook.com');
		}, 1000);
	}

	if(message.includes('open upwork')){
		const finalText = 'Alright sir';
		speech.text = finalText;

		setTimeout(() => {
			window.open('https://upwork.com');
		}, 1000);
	}

	if(message.includes('open twitter')){
		const finalText = 'Alright sir';
		speech.text = finalText;

		setTimeout(() => {
			window.open('https://twitter.com');
		}, 1000);
	}

	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}