function Questions(id,title,degree,rightAns) {
    this.id = id;
    this.title = title;
    this.rightAns = rightAns;
    this.degree = degree;
    this.answers = [];
}

function Answers(one,two,three,four) {
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
}

Questions.prototype.pushAnswers = function(obj) {
    if(obj.constructor !== answers) {
        throw("Error");
    }
    this.answers.push(obj);
}

var q1 = new Questions(1,"What is the average value of 50, 60:....",1,55);
var a1 = new Answers(55,50,10,60);

var q2 = new Questions(2,"What is the sum of 100, 150, 800, 400:....",1,1450);
var a2 = new Answers(1400,1450,1200,1500);

var q3 = new Questions(3,"What is the missing value in the series(10,20,30,40,..):....",1,50);
var a3 = new Answers(20,30,50,60);

var q4 = new Questions(4,"What is the sqrt(4):...",1,2);
var a4 = new Answers(4,3,1,2);

var q5 = new Questions(5,"What is the factorial of 5:....",1,120);
var a5 = new Answers(60,90,120,100);

var q6 = new Questions(6,"What is the factorial of 0:....",1,1);
var a6 = new Answers(0,1,-1,10);

var q7 = new Questions(7,"What is the mode of(10,10,20,30,40):......",1,10);
var a7 = new Answers(10,20,30,40);

var q8 = new Questions(8,"What is the median of(10, 20, 30, 40, 50):......",1,30);
var a8 = new Answers(10,20,30,40);

var q9 = new Questions(9,"What is the area of a right triangle with dimensions (3m,4m,5m):.....",1,6+"m2");
var a9 = new Answers(6,12,10,5);

var q10 = new Questions(10,"What is the Perimeter of a right triangle with dimensions (3m,4m,5m):.....",1,12+"m");
var a10 = new Answers(12,10,5,9);

let MCQS = [{
    question: q1.title,
    choice1: a1.one,
    choice2: a1.two,
    choice3: a1.three,
    choice4: a1.four,
    answer: 0
},
        {
    question: q2.title,
    choice1: a2.one,
    choice2: a2.two,
    choice3: a2.three,
    choice4: a2.four,
    answer: 1
},    
        {
    question: q3.title,
    choice1: a3.one,
    choice2: a3.two,
    choice3: a3.three,
    choice4: a3.four,
    answer: 2
},
        {
    question: q4.title,
    choice1: a4.one,
    choice2: a4.two,
    choice3: a4.three,
    choice4: a4.four,
    answer: 3
},
        {
    question: q5.title,
    choice1: a5.one,
    choice2: a5.two,
    choice3: a5.three,
    choice4: a5.four,
    answer: 2
},
        {
    question: q6.title,
    choice1: a6.one,
    choice2: a6.two,
    choice3: a6.three,
    choice4: a6.four,
    answer: 1
},
        {
    question: q7.title,
    choice1: a7.one,
    choice2: a7.two,
    choice3: a7.three,
    choice4: a7.four,
    answer: 0
},
        {
    question: q8.title,
    choice1: a8.one,
    choice2: a8.two,
    choice3: a8.three,
    choice4: a8.four,
    answer: 2
},
        {
    question: q9.title,
    choice1: a9.one,
    choice2: a9.two,
    choice3: a9.three,
    choice4: a9.four,
    answer: 0
},
        {
    question: q10.title,
    choice1: a10.one,
    choice2: a10.two,
    choice3: a10.three,
    choice4: a10.four,
    answer: 0
}];