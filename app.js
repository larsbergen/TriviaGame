function populate() {
    if(quiz.isEnded()){
        showScores();
    } else {var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex.text;
var choices = quiz.getQuestionIndex().choices;
for(var i = 0; i<choices.length; i++) {
   var element = document.getElementById("choice" + i);
   element.innerHTML = choices[i];
   guess("btn" + i, choices[i]);
   console.log(this);
}
}
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
        console.log(this);
    }
}
function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>your scores: " + quiz.score + "</h2>"
var element = document.getElementById("quiz");
element.innerHTML = gameOverHtml;
console.log(this);
}



var questions = [
    new Question("what does a dog say", ["moo" , "meow" , "bark bark", "dogs can't speak"], "dogs can't speak"),
    new Question("what sound does a dog make", ["moo" , "meow" , "bark bark" , "baaaaaaaa"], "bark bark"),
    new Question("what color is a banana", ["yellow" , "green" , "blue" , "pink"], "yellow"),
    new Question("who is the most annoying person ever", ["ghandi" , "abe lincon" , "zeus" , "amy schumer"], "amy schumer"),
    new Question("guess what", ["no" , "chicken butt" , "John Wayne" , "nope"], "chicken butt")
];
var quiz = new Quiz(questions);
populate();
console.log(this);