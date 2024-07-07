const ans  = [
        {
          question: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          answer: 'Paris',
        },
        {
          question: 'What is the largest planet in our solar system?',
          options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
          answer: 'Jupiter',
        },
        {
          question: 'Which country won the FIFA World Cup in 2018?',
          options: ['Brazil', 'Germany', 'France', 'Argentina'],
          answer: 'France',
        },
        {
          question: 'What is the tallest mountain in the world?',
          options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
          answer: 'Mount Everest',
        },
        {
          question: 'Which is the largest ocean on Earth?',
          options: [
            'Pacific Ocean',
            'Indian Ocean',
            'Atlantic Ocean',
            'Arctic Ocean',
          ],
          answer: 'Pacific Ocean',
        },
        {
          question: 'What is the chemical symbol for gold?',
          options: ['Au', 'Ag', 'Cu', 'Fe'],
          answer: 'Au',
        },
        {
          question: 'Who painted the Mona Lisa?',
          options: [
            'Pablo Picasso',
            'Vincent van Gogh',
            'Leonardo da Vinci',
            'Michelangelo',
          ],
          answer: 'Leonardo da Vinci',
        },
        {
          question: 'Which planet is known as the Red Planet?',
          options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
          answer: 'Mars',
        },
        {
          question: 'What is the largest species of shark?',
          options: [
            'Great White Shark',
            'Whale Shark',
            'Tiger Shark',
            'Hammerhead Shark',
          ],
          answer: 'Whale Shark',
        },
        {
          question: 'Which animal is known as the King of the Jungle?',
          options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
          answer: 'Lion',
        },
      ];

let question =  document.getElementById('question');
let result = document.getElementById('result');
let btn = document.getElementById('btn');
let ScoreNum= document.getElementById('scoreNum');
var incorrectAnswers = []
let currentquestion = 0;
let score = 0;
let displayresultwrapper = document.getElementById('display-result')
let display_text = document.getElementById('display-text')
let questionanswerwrapper = document.getElementById('question-answer-wrapper')
let showresult = document.getElementById('display-result')
var Retrybtn =document.getElementById('Retry-btn')
let display_incorrect_ans =document.getElementById('display-incorrect-ans')
let number_of_question = document.getElementById('number-of-question')
let wrong_ans = document.getElementById('wrong-ans')
let wrong_answer_div = document.getElementById('wrong-answer-div')
let question_an = document.getElementById('question-ans')
let user_wrong_answer = document.getElementById('user-wrong-answer')
let Right_ans = document.getElementById('Right-ans')
let timecounter = document.getElementById('timecounter')
let setup = document.getElementById('setup')
let setup_btn = document.getElementById('setup_btn')
let quiz_wrapper = document.getElementById('Quiz-wrapper')
let left_arrow = document.getElementById('left-arrow')
let right_arrow = document.getElementById('right-arrow')




let timer ;
setup_btn.addEventListener('click',function(){
  timesetter()
  setup.className= 'hide'
  quiz_wrapper.className = 'show'
})
function timesetter(){

  let startingtime = 3;
  let time  = startingtime* 60
  
 timer =  setInterval(function(){
    let minute = Math.floor(time/60)
  let second=  time%60
  second = second < 10 ? '0' + second : second
  minute = minute < 10 ? '0' + minute : minute
  let finaltime = ` Time : ${minute} : ${second}`
  timecounter.innerHTML =  finaltime
  time--
  if(time<0){
  
    displayresult()
    clearInterval(timer)
    
  }
  if(minute<=2){
    timecounter.className = 'animationvalue'
  }

  },1000)
  
 }

 
 

let getquestion=()=>{
  console.log(currentquestion)
    let option = ans[currentquestion].options
    question.innerHTML = ans[currentquestion].question
    let optionElement = document.createElement('div')
    for(var i =0 ; i<option.length;i++){
        const optionwrapper = document.createElement('label')
        optionwrapper.className= 'option'
        let radio = document.createElement('input')
        let optiontext = document.createTextNode(option[i])
        radio.type  ='radio'
        radio.name = 'quiz'
        
        radio.value = option[i]
        

       
        optionwrapper.appendChild(radio)
        optionwrapper.appendChild(optiontext)
        optionElement.appendChild(optionwrapper)
}
result.innerHTML = ''
result.appendChild(optionElement)

}





btn.addEventListener('click',function(){
    
  const selectedoption =  document.querySelector('input[name="quiz"]:checked')
 let answer = selectedoption.value
 if(selectedoption){
    if(answer ===ans[currentquestion].answer){
        displayscore()
        

     }
     else{
      incorrectAnswers.push({
            question: ans[currentquestion].question,
            incorrectAnswer : answer,
            correctAnswer : ans[currentquestion].answer
        })
    }
    currentquestion++
    selectedoption.check = false
    if(currentquestion<ans.length){
        getquestion()
    }else{
     
      displayresult()
       clearInterval(timer)
      
    }
 }

})

function displayresult(){
 
  questionanswerwrapper.className = 'hide'
  showresult.className = 'show'
 
  
  display_text.innerHTML = `You score ${score} out of ${ans.length}`
}

function displayscore(){
  score++
  ScoreNum.innerHTML= score
  console.log(incorrectAnswers)
 
}
Retrybtn.addEventListener( 'click',function(){
 
  showresult.className = 'hide'
  questionanswerwrapper.className = 'show'
  wrong_answer_div.className= 'hide'
  currentquestion = 0
  score = 0
  ScoreNum.innerHTML= score
  
getquestion()
timesetter()
  
})

wrong_ans.addEventListener('click',function(){
 
  var wrong_div = document.createElement('label')
  for(var i =0; i<incorrectAnswers.length; i++ ){

    var question_ans = document.createElement('h3')
    question_ans.className = 'incorrect-question'
    question_ans.innerHTML = incorrectAnswers[i].question
  
    var user_wrong = document.createElement('h4')
    user_wrong.innerHTML= `Wrong Answer: ${incorrectAnswers[i].incorrectAnswer}`
    user_wrong.className = 'wrong-answer'

    var Right = document.createElement('h4')
    Right.innerHTML = `right Answer : ${incorrectAnswers[i].correctAnswer}`
    Right.className = 'wrong-answer'

    wrong_div.appendChild(question_ans)
    wrong_div.appendChild(user_wrong)
    wrong_div.appendChild(Right)
  }
console.log(wrong_div)
wrong_answer_div.className= 'show'
  wrong_answer_div.appendChild(wrong_div)
  


})

getquestion()
