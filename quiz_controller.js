function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    console.log(this);
}
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionsIndex];
    console.log(this);
}
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionsIndex;
    console.log(this);
}
Quiz.prototype.guess = function(answer) {
    this.questionIndex++;
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
        console.log(this);
    }
}