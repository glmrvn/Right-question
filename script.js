var target = document.getElementById('question');
var questions = [
    'Why are you studying English?',
    'What do you do in your free time?',
    'How’s it going?',
    'How are you feeling?',
    'How was your day?',
    'Do you like German food?',
    'Can you play chess?',
    'Where are you from?',
    'What’s your job?',
    'Have you got any children?',
    'What do you like to do on weekends?',
    'What would you like to eat?',
    'What’s the weather like?',
    'What are your views on Donald Trump as the America’s President?'
];

function newTitle () {
    var i = (Math.random() * questions.length) | 0;
    question.innerText = questions[i];
}