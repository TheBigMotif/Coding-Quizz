let score = document.getElementById('score');
let totalScore = document.getElementById('totalScore');
let countdown = document.getElementById('countdown');
let count = 0;
let scoreCount = 0;
let duration = 0;
let questionGroup = document.querySelectorAll('.question_group');
let questionAnswerRow = document.querySelectorAll('.question_group .question_answer_row input');
let userScore = 0;


questionAnswerRow.forEach(function(questionAnswerRow){
    questionAnswerRow.addEventListener('click', function(){

        setTimeout(function(){
            next();
        }, 500)
    })


});

function next(){
    count += 1;
    for(var i = 0; i < questionGroup.length; i++){
        questionGroup[i].className = 'question_group';
    }
    questionGroup[count].className = 'question_group active';
    if(count == 6){
        skip.style.display = 'none';
    }
}


