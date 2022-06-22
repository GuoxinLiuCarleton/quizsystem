var Choices = document.querySelector("#choice-list");
var taskIdCounter = 1;
var pageContentEl = document.querySelector("#page-content");
var Qcount=1;
var score=0;
var pageContentEl = document.querySelector("#choice-list");
var timerEl = document.getElementById('countdown');

var timeLeft = 50;
var scoreDataObj = {
  id:"",
  name: "",
  time: "",
}


var createQuestion =function(Qnumber){
  var QLibrary=["Coding Quiz Challenge!","Quiz1:correct answer is 1","Quiz2:correct answer is 2","Quiz3:correct answer is 3","Quiz4:correct answer is 4","Quiz5:correct answer is 1","All Done!","High Scores"];
  var question = document.querySelector("#question");
  var oneQuestion = document.createElement("p");
  oneQuestion.textContent = QLibrary[Qnumber];
  oneQuestion.className = "one-question";
  oneQuestion.setAttribute("data-task-id", 100);
  question.appendChild(oneQuestion);
}

var createChoice=function (Cnumber){
  if (Cnumber==1){
    var oneChoice = document.createElement("li");
    oneChoice.textContent = "start";
    oneChoice.className = "task-item";
    oneChoice.setAttribute("data-task-id", 0);
    Choices.appendChild(oneChoice);
  }else if (Cnumber==2||Cnumber==3||Cnumber==4||Cnumber==5){
    var abc=['1','2','3','4'];
    for (var i=1;i<=4;i++){
      var oneChoice = document.createElement("li");
      oneChoice.textContent = abc[i-1]+"."+"Answer";
      oneChoice.className = "task-item";
      oneChoice.setAttribute("data-task-id", i);
      Choices.appendChild(oneChoice);
    }
  }
}

var createResult =function (taskId) {

    if (taskId=="0"){
      var resultDisplay = document.querySelector("#result");
      var oneResult = document.createElement("p");
      oneResult.textContent = "";
      oneResult.className = "one-result";
      oneResult.setAttribute("data-task-id", 200);
      resultDisplay.appendChild(oneResult);
    }else {
      if (Qcount=="1"){
        if (taskId=="1")  {
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Correct";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
          score++;
        } else{
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Incorrect";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
        }
      }else if (Qcount=="2"){
        if (taskId=="2")  {
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Correct";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
          score++;
        } else{
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Incorrect";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
        }
      }else if (Qcount=="3"){
        if (taskId=="3")  {
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Correct";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
          score++;
        } else{
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Incorrect";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
        }
      }else if (Qcount=="4"){
        if (taskId=="4")  {
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Correct";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
          score++;
        } else{
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Incorrect";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
        }
        
      }else if(Qcount=="5"){
        if (taskId=="1")  {
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Correct";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
          score++;
        } else{
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Incorrect";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
        }
      }
        
    }
}; 

var deleteTask = function(taskId)   {
  
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  taskSelected.remove();

  
};

var quizEnd = function(){
  var resultDisplay = document.getElementById("result");
  resultDisplay.style.display="none";

  var endText = document.createElement("li");
  endText.textContent = "Your final score is"+score+".";
  endText.className="end-text";
  endText.setAttribute("data-task-id", 300);
  Choices.appendChild(endText);

  var endText = document.createElement("li");
  endText.textContent = "Enter initials:";
  endText.className="end-text";
  endText.setAttribute("data-task-id", 400);

  var text15 =document.createElement('input');
  text15.setAttribute('type', 'text');
  text15.setAttribute('id', "initial");
  endText.appendChild(text15);

  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Submit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.type="submit";
  editButtonEl.setAttribute("data-task-id", 50);
  endText.appendChild( editButtonEl);
  Choices.appendChild(endText);
  scoreDataObj.id=1;
  scoreDataObj.time=timeLeft;
  timerEl.style.display="none";

}



function countdown(timerEl) {
  

    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = ' Time:'+timeLeft ;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = ' Time:'+timeLeft ;
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
         taskSelected.remove();
         taskSelected = document.querySelector(".task-item[data-task-id='" + 1 + "']");
         taskSelected.remove();
         taskSelected = document.querySelector(".task-item[data-task-id='" + 2 + "']");
         taskSelected.remove();
         taskSelected = document.querySelector(".task-item[data-task-id='" + 3 + "']");
         taskSelected.remove();
         taskSelected = document.querySelector(".task-item[data-task-id='" + 4 + "']");
         taskSelected.remove();
         var taskSelected = document.querySelector(".one-result[data-task-id='" + 200 + "']");
         taskSelected.remove();
         timerFlag=0;
         createQuestion(6);
          quizEnd();
        

        
       
      }
    }, 1000);
  
  
}

createQuestion(0);
createChoice(1);

 var highScore = document.querySelector('#highscore');
  var highScoretext = document.createElement("p");
  highScoretext.textContent = "View high score";
  highScoretext.className = "highscore";
  highScoretext.setAttribute("data-task-id", 123);
  highScore .appendChild(highScoretext);

var highScoreJump=function(event){
  var highscoreId = event.target.getAttribute("data-task-id");
  if (highscoreId && Qcount=="1") {
    showHighscoreb(event);
  }
}

var startQuiz = function(event) {
   var taskId = event.target.getAttribute("data-task-id");
   console.log(taskId);
  if (taskId=="0"||taskId=="1"||taskId=="2"||taskId=="3"||taskId=="4"||taskId=="50"){
    generateQuiz(taskId);
  }else if (taskId=="66"){
    showHighscoreCounter=0;
    var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
    taskSelected.remove();
    var taskSelected = document.querySelector(".end-text[data-task-id='" + 400 + "']");
    taskSelected.remove();
    var taskSelected = document.querySelector(".end-text[data-task-id='" + 500 + "']");
    taskSelected.remove();
    createQuestion(0);
    createChoice(1);
    Qcount=1;
    score=0;
  }

};
var timerFlag=0;
var generateQuiz=function(taskId) {
  if (taskId=='0'){
    timeLeft = 15;
    deleteTask(0);
    var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
    taskSelected.remove();
    var resultDisplay = document.getElementById("result");
    resultDisplay.style.display="block";
    createQuestion(1);
    createChoice(2);
    createResult(taskId);
    
    timerEl = document.getElementById('countdown');
    timerEl.style.display="block";
    if (timerFlag==0){
      countdown(timerEl);
      timerFlag=1;
    }
    
    

  }else if (taskId=="1"||taskId=="2"||taskId=="3"||taskId=="4"){
    if (Qcount <= 5){
      var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
      taskSelected.remove();
      var taskSelected = document.querySelector(".one-result[data-task-id='" + 200 + "']");
      taskSelected.remove();
      for (var i=1;i<=4;i++){
        deleteTask(i);
      }
      createQuestion(Qcount+1);
      createChoice(Qcount+1);
      createResult(taskId);
      if (Qcount==5){
        
        var taskSelected = document.querySelector(".one-result[data-task-id='" + 200 + "']");
        taskSelected.remove();
        quizEnd();
      }
      
    }
    
    Qcount++;
    
  }  else if (taskId=="50"){
    var firstNameInput = document.querySelector("#initial");
    scoreDataObj.name=firstNameInput.value.trim();
    saveScore();
    
  }     
}

var savedScore=[];
var idNumber=0;
var saveScore = function() {
 
  savedScore.push(scoreDataObj);
  localStorage.setItem("tasks", JSON.stringify(savedScore));
  showHighscore();

};

var showHighscore =function (event){
  // var resultDisplay = document.getElementById("choice-list");
  // resultDisplay.style.display="none";
  var resultDisplay = document.getElementById("result");
  resultDisplay.style.display="none";

  var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
  taskSelected.remove();
  createQuestion(7);
  
  var taskSelected = document.querySelector(".end-text[data-task-id='" + 300 + "']");
  taskSelected.remove();
  var taskSelected = document.querySelector(".end-text[data-task-id='" + 400 + "']");
  taskSelected.remove();

  var endText = document.createElement("li");
  endText.textContent = "";
  endText.className="end-text";
  endText.setAttribute("data-task-id", 400);
  var text15 =document.createElement('input');
  text15.setAttribute('type', 'text');
  text15.setAttribute('id', "initial");
  endText.appendChild(text15);
  Choices.appendChild(endText);

  var endText = document.createElement("li");
  endText.textContent = "";
  endText.className="end-text";
  endText.setAttribute("data-task-id", 500);
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Go Back";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.type="submit";
  editButtonEl.setAttribute("data-task-id", 66);
  endText.appendChild( editButtonEl);
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Clear High Score";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.type="submit";
  editButtonEl.setAttribute("data-task-id", 99);
  endText.appendChild( editButtonEl);
  Choices.appendChild(endText);



}
var showHighscoreCounter=0;
var showHighscoreb =function (event){
  if (showHighscoreCounter==0)
  {
    var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
    taskSelected.remove();
    var taskSelected = document.querySelector(".task-item[data-task-id='" + 0 + "']");
    taskSelected.remove();
    showHighscoreCounter=1;
    createQuestion(7);
  
    var endText = document.createElement("li");
    endText.textContent = "";
    endText.className="end-text";
    endText.setAttribute("data-task-id", 400);
    var text15 =document.createElement('input');
    text15.setAttribute('type', 'text');
    text15.setAttribute('id', "initial");
    endText.appendChild(text15);
    Choices.appendChild(endText);

    var endText = document.createElement("li");
    endText.textContent = "";
    endText.className="end-text";
    endText.setAttribute("data-task-id", 500);
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Goback";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.type="submit";
    editButtonEl.setAttribute("data-task-id", 66);
    endText.appendChild( editButtonEl);
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Clear High Score";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.type="submit";
    editButtonEl.setAttribute("data-task-id", 99);
    endText.appendChild( editButtonEl);
    Choices.appendChild(endText);
  }
 
}



var loadTasks = function() {
  tasks = localStorage.getItem("tasks");

  if (!tasks) {
    return false;
  }

  tasks = JSON.parse(tasks);
  for (var i = 0; i < savedTasks.length; i++) {
      // pass each task object into the `createTaskEl()` function
      createTaskEl(savedTasks[i]);
  }
}
var textChanges=function(){
 
}



var resultDisplay = document.getElementById("result");
resultDisplay.style.display="none";
var inchangeColor = function (event){
  var taskIdb = event.target.getAttribute("data-task-id");
   console.log(taskIdb);
   if (taskIdb==0){
    taskSelected = document.querySelector(".task-item[data-task-id='" + 0 + "']");
    taskSelected.style.background="blue";
   }else if (taskIdb==1) {
    taskSelected = document.querySelector(".task-item[data-task-id='" + 1 + "']");
    taskSelected.style.background="blue";
   }else if (taskIdb==2) {
    taskSelected = document.querySelector(".task-item[data-task-id='" + 2 + "']");
    taskSelected.style.background="blue";
   }else if (taskIdb==3) {
    taskSelected = document.querySelector(".task-item[data-task-id='" + 3 + "']");
    taskSelected.style.background="blue";
   }else if (taskIdb==4) {
    taskSelected = document.querySelector(".task-item[data-task-id='" + 4 + "']");
    taskSelected.style.background="blue";
   }



}

var outchangeColor = function (event){
  var taskIdb = event.target.getAttribute("data-task-id");
   console.log(taskIdb);
   if (taskIdb==0){
    taskSelected = document.querySelector(".task-item[data-task-id='" + 0 + "']");
    taskSelected.style.background="purple";
   }else if (taskIdb==1){
    taskSelected = document.querySelector(".task-item[data-task-id='" + 1 + "']");
    taskSelected.style.background="purple";
   }else if (taskIdb==2){
    taskSelected = document.querySelector(".task-item[data-task-id='" + 2 + "']");
    taskSelected.style.background="purple";
   }else if (taskIdb==3){
    taskSelected = document.querySelector(".task-item[data-task-id='" + 3 + "']");
    taskSelected.style.background="purple";
   }else if (taskIdb==4){
    taskSelected = document.querySelector(".task-item[data-task-id='" + 4 + "']");
    taskSelected.style.background="purple";
   }
}


pageContentEl.addEventListener("click", startQuiz);
pageContentEl.addEventListener("mouseover", inchangeColor);
pageContentEl.addEventListener("mouseout", outchangeColor);
highScore.addEventListener("click", highScoreJump);





  

