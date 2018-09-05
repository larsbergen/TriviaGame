function Question(text, choices, answer) {
    this.text= text;
    this.choices=choices;
    this.answer=answer;
    console.log(this);
}
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
    console.log(this);
}