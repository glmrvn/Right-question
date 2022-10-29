var target = document.getElementById('question');
var questions = [
    "Which language is best for front end development?",
    "What skills does a front-end developer need?",
    "Define HTML meta tags.",
    "Differentiate between div and span?",
    "What is React JS?",
    "Describe the advantages of REST web services?",
    "How browsers render the UI?",
    "What is a Grid system in CSS?",
    "Describe the distinction between Class and Prototypal inheritance in Javascript?",
    "Explain user-centered design?",
    "What is ClickJacking?",
    "Tell me when and why should I make use of Webpack?",
    "Mention three ways to decrease page load time?",
    "How does the server hanger the page in which content is present in several languages?",
    "Why did we utilize the data- the attribute in HTML and why it is now advised not to use?",
    "Mention the benefits of CoffeeScript over JavaScript?",
    "What is stringify?",
    "State all the elements of the CSS Box Model.",
    "What is Progressive Rendering?",
    "In an image tag, what is the benefit of the srcset attribute?",
    "Mention the difference between MySQL and MongoDB?",
    "Define the Anonymous function in JS?",
    "What do you know about the CSS image sprites and why it is utilized?",
    "Suggest some ways on how to fix the browser-specific styling issue?",
    "Mention the pitfalls for using a CSS Preprocessor like Sass?",
    "Suggest how can we optimize our front-end page.",
    "What is the difference between attribute and property?",
    "State the difference between == and ===?",
    "Why do we utilize the “use strict”; statement?",
    "Name the major HTTP requests",
    "Why should we hire you as frontend developer?",
    "What is the most challenging work you have ever done as a front-end developer?",
    "Explain the Difference Between Git Pull and Git Fetch",
    "Name a few Git Commands and function",
    "Explain Git Push and Git Pull",
    "What are some most used Git Commands and functions?",
    "What do you understand by a callback function?",
    "What are the key differences between XHTML and HTML?",
    "What do you know about CSS Selectors?",
    "What is the key difference between Class and Prototype-based inheritance?",
    "What is the key difference between Null and Undefined in JavaScript?",
    "What is the difference between Visibility:Hidden;and Display:None;?",
    "What is the key difference between cookies, session storage, and local storage?",
    "What do you understand by Semantic HTML? How does it work?",
    "What do you understand by Web Accessibility?",
    "What is the difference between Git Merge and Git Rebase?",
    "What do you understand by lazy loading? What are the advantages and disadvantages of lazy loading?",
    "What is the difference between a tag and an attribute in HTML?",
    "How would you scale Node application?",
    "Name some best practices for better RESTful API design",
    "What’s the difference between resetting and normalizing CSS? Which would you choose, and why?",
    "What are defer and async attributes on a <script> tag?",
    "What is the difference between PUT and POST?",
    "What is the difference between span and div?",
    "What are advantages of REST web services?",
    "Why and when should I Use Webpack?",
    "Can you write SQL queries?",
    "Can you describe your process of working in the terminal?",
    "How do you test an application?",
    "What is strict mode?",
    "Explain the Prototype Design Pattern",
    "What is Content Security Policy?",
    "How will you handle HTTP errors in Angular applications?",
    "Explain tsconfig.json file",
    "Explain the difference between classes and IDs?",
    "What is Ajax?",
    "What is the difference between Block, Inline,  Inline-block, and Box-sizing?",
    "Explain how do you deal with browser-specific style incompatibility?",
    "If you could master one technology this year, which would you choose, and how would you go about doing it?",
    "Which of our company values do you most identify with and why?",
    "What’s the top strength you have that would make you a good fit for this role?",
    "What kind of work environment do you do your best work in?",
    "How do you stay up to date on industry trends?",
    "What is the most challenging programming problem you’ve dealt with recently?",
    "How do you ensure your code is clean and your documentation is thorough?",
    "How do you feel about getting constructive feedback and how do you handle it?"
];

var lastUsed = "";

function randomQuestion () {
    document.getElementById("button").innerHTML = "Next Question";
    var i = (Math.random() * questions.length) | 0;
    if (i != lastUsed) {
        var random = questions[i];
        question.innerText = random;
        lastUsed = i;
    } else {
        newTitle ()
    }
}