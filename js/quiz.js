function Quiz () {
	this.questions = []
	this.progress = 0;
	this.score = 0;
}

Quiz.prototype.guess = function(guess) {
	var question = this.questions[this.progress];
	var answer = question.answer;
	if(guess === answer) {
		this.score += 1;
	}
	this.progress += 1;
	if(this.progress < this.questions.length ) {
		quiz.renderInElement();
	} else {
		quiz.renderScorePage();
	}
}

Quiz.prototype.add = function(question) {
	this.questions.push(question);
};

Quiz.prototype.renderInElement = function() {
	var question = this.questions[this.progress]
	var HTML ='<h1>Persona Quiz</h1>';
	HTML += question.toHTML();
	HTML += '<p id="progress">Question '+(this.progress+1)+' of '+ this.questions.length + '</p>';
	this.populateIdWithHTML("quiz", HTML)
};
Quiz.prototype.renderScorePage = function() {
	var HTML ='<h1>Persona Quiz</h1>';
	HTML += '<h2 id="score" class="headline-secondary--grouped">Score: ' + this.score + ' out of ' + this.questions.length + '</h2>';
	this.populateIdWithHTML("quiz", HTML);
}
Quiz.prototype.populateIdWithHTML = function(id, text) {
	var element = document.getElementById(id);
	element.innerHTML = text;
}

function Question(question, answer, choices) {
	this.question = question;
	this.answer = answer;
	this.choices = choices;
}

Question.prototype.toHTML = function() {
	var HTML = '<h2 id="question" class="headline-secondary--grouped">';
	HTML += this.question;
	HTML += '</h2>';
	for(var i=0;i<this.choices.length;i++) {
		var choice = this.choices[i]
		HTML += '<button id="guess'+ i +'" '
		HTML += 'class="btn--default"' 
		HTML += 'onclick="quiz.guess(\'' + choice + '\')">'
		HTML += choice;
		HTML += '</button>'
	}
	return HTML
}

var quiz = new Quiz();

var question1 = new Question("What is the name of the homeroom teacher at the start of Persona 4 Golden?", "Kinshiro Morooka", ["Noriko Kashiwagi", "Kimiko Sofue" , "Kinshiro Morooka"])
var question2 = new Question("What is the name of the first Persona that the Protagonist summons?", "Izanagi", ["Jiraiya","Izanami","Izanagi", "Teddie"])

quiz.add(question1)
quiz.add(question2)


quiz.renderInElement();