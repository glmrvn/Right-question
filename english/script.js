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
    'What are your views on Donald Trump as the America’s President?',
    'Do you play any sports around here?',
    'How do you like working for your company?',
    'When and where were you born?',
    'What is your marital status?',
    'What do you like?',
    'What are you going to do tomorrow?',
    'What will you do now?',
    'What are you thinking of?',
    'Are you happy today?',
    'Can You Play Musical Instruments?',
    'How Long Have You Been Studying English?',
    'Do You Have Any Brothers And Sisters?',
    'Have You Been To San Francisco?'
];

var lastUsed = "";

function newTitle () {
    var i = (Math.random() * questions.length) | 0;
    if (i != lastUsed) {
        var random = questions[i];
        question.innerText = random;
        lastUsed = i;
    } else {
        newTitle ()
    }
}