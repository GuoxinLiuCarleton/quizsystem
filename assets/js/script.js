var Choices = document.querySelector("#choice-list");
var taskIdCounter = 1;
var pageContentEl = document.querySelector("#page-content");
var Qcount=1;
var score=0;
var pageContentEl = document.querySelector("#choice-list");
var timerEl = document.getElementById('countdown');

var timeLeft = 100;
var scoreDataObj = {
  name: "",
  time: "",
}

var createQuestion =function(Qnumber){
  var QLibrary=["Coding Quiz Challenge!","Quiz1:correct answer is 1","Quiz2:correct answer is 2","Quiz3:correct answer is 3","Quiz4:correct answer is 4","Quiz5:correct answer is 1","All Done!"];
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
 
  var endText = document.createElement("li");
  endText.textContent = "Your final score is"+score+".";
  endText.setAttribute("data-task-id", 300);
  Choices.appendChild(endText);
  var endText = document.createElement("li");
  endText.textContent = "Enter initials:";
  endText.setAttribute("data-task-id", 400);

  var text15 =document.createElement('input');
  text15.setAttribute('type', 'text');//输入框的类型
  text15.setAttribute('id', "initial");//输入框的id
  endText.appendChild(text15);

  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Submit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.type="submit";
  editButtonEl.setAttribute("data-task-id", 50);
  endText.appendChild( editButtonEl);
  Choices.appendChild(endText);
  
  timerEl.remove();
  scoreDataObj.time=timeLeft;
  savedScore.push(scoreDataObj);
  
}
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
     
    }
  }, 1000);
}

createQuestion(0);
createChoice(1);
var startQuiz = function(event) {
   var taskId = event.target.getAttribute("data-task-id");
  generateQuiz(taskId);
};

var generateQuiz=function(taskId) {
  if (taskId=='0'){
    deleteTask(0);
    var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
    taskSelected.remove();
    createQuestion(1);
    createChoice(2);
    createResult(taskId);
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

  
  localStorage.setItem("tasks", JSON.stringify(savedScore));
};

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
countdown();

pageContentEl.addEventListener("click", startQuiz);







  

