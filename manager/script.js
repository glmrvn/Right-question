var target = document.getElementById('question');
var questions = [
    "What are the identifiable differences between a project manager and a product manager?",
    "What was the hardest decision you had to make as a product manager?",
    "Can you describe a scenario as a product manager where you failed? And what did you learn from it?",
    "How do you monitor performance and success?",
    "How do you determine what customers want and need?",
    "What’s one of your favorite products and what’s something you’d change about it?",
    "How do you communicate your product strategy?",
    "Have you ever been in a situation where your team has let you down and you’ve had to take the blame?",
    "What was your most successful product as product manager?",
    "What are the important elements of a competitive analysis?",
    "What are the most exciting technology trends and why are they important?",
    "What are signs that it’s time to cut corners to get the product launched, and what would you cut?",
    "Can you describe how the product management team participates in sales enablement?",
    "How would you prioritize resources when you have two important things to do but can’t do them both?",
    "Describe a scenario which required you to say no to an idea or project",
    "How do you decide what and what not to build?",
    "What is a product you currently use every day, why and how would you improve it?",
    "What is the key to a good user interface?",
    "While we make X product for the general public, we also have a B2B division. What is your experience with juggling both markets?",
    "How do you know if a product is well designed?",
    "How would you redesign our product?",
    "What is one improvement you would implement for our product in the next 6 months?",
    "How would you describe our product to someone?",
    "What has made Instagram successful?",
    "How do you know when to cut corners to get a product out the door?",
    "Who are our competitors?",
    "Tell me about a company that has great customer service, what they do and why do they do it well?",
    "What is the importance of engineers and technical teams as stakeholders? How do you integrate them into the overall product vision?",
    "What aspects of product management do you find the most exciting?",
    "Tell me about a time when you had to build or motivate a team.",
    "How do you think product managers interact with engineers?",
    "How would you explain Product Management to a 5-year-old?",
    "What aspects of product management do you find the least interesting?",
    "Tell me about your role on your team, who else you work with, and how you work with them",
    "Tell me about how you interact with users?",
    "Talk about how you overcame product failures/challenges or poor feedback",
    "Tell me about a mistake you made and how you handled it",
    "How do you choose which one to implement?",
    "Tell me about a time you used data to make a decision",
    "Is consensus always a good thing?",
    "What is the best way to work with customers and users?",
    "What’s the difference between leadership and management?",
    "What is the most difficult decision you’ve ever had to make?",
    "How do you say no to people?",
    "What is one of the best ideas you’ve ever had?",
    "What will be the impact of self-driving cars",
    "Pick a product that you used this morning and tell me why you like it",
    "Pick a product you hate and tell me how you’d improve it",
    "Which tech trend are you following at the moment?",
    "How would you measure the success of Google Photos?",
    "What should be Airbnb's strategy during the Covid-19 pandemic",
    "Estimate the number of passengers arriving in SF airport everyday",
    "How would you measure the success of Facebook Likes?",
    "If you are opening a new store, how would you decide how many cash register is needed for the store?",
    "How would you re-design the carwash?",
    "How would you design a web search engine for children below 7 years old?",
    "How would you acquire more users for Uber?",
    "If you were the PM for Lyft, what dashboard would you build to track the health of the app?",
    "Design an application which enables patients to find doctors",
    "Give an example of a badly designed product",
    "Design a vending machine for blind people",
    "How many elevators should an average office building have?",
    "New users signing up for FB are not returning after 30 days, how will you identify the problem and discuss solutions to that",
    "How can Uber Eats use data to help restaurants and vendors increase their ranking?",
    "How would you measure the success of YouTube TV?",
    "What is the toughest problem that you have solved as a Product Manager?",
    "How do you manage a new product launch? What tactics, strategies and processes do you use?",
    "Take a typical day in your life as a product manager. What's something you would perhaps prefer to skip?",
    "What are you looking for in a new position?",
    "What inputs do you use to build your roadmap?",
    "How do you plan releases? What development methodology does your company follow?",
    "Tell me how you motivate other people?",
    "Describe a time when you used data to make a decision",
    "What do your customers say they love most about the product?",
    "How do you understand what 'responsibility' is?",
    "Do you follow any opinion makers on product management topics? Who are they? Why do you read them?"
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