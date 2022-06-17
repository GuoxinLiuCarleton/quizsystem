var Choices = document.querySelector("#choice-list");
var taskIdCounter = 1;
var pageContentEl = document.querySelector("#page-content");
var Qcount=1;

var createQuestion =function(Qnumber){
  var QLibrary=["click to start quiz!","quiz1","quiz2","quiz3","quiz4","quiz5","end"];
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
  }else {
    var abc=['1','2','3','4'];
    for (var i=1;i<=4;i++){
      var oneChoice = document.createElement("li");
      oneChoice.textContent = abc[i-1]+"."+"hello";
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
    }else if (taskId=="1"){
      var resultDisplay = document.querySelector("#result");
      var oneResult = document.createElement("p");
      oneResult.textContent = "Correct";
      oneResult.className = "one-result";
      oneResult.setAttribute("data-task-id", 200);
      resultDisplay.appendChild(oneResult);
    } else{
          var resultDisplay = document.querySelector("#result");
          var oneResult = document.createElement("p");
          oneResult.textContent = "Incorrect";
          oneResult.className = "one-result";
          oneResult.setAttribute("data-task-id", 200);
          resultDisplay.appendChild(oneResult);
    }
}; 

var deleteTask = function(taskId)   {
  
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  taskSelected.remove();

  
};

var quizEnd = function(){
  createQuestion(6);
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
    if (Qcount <= 4){
      var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
      taskSelected.remove();
      var taskSelected = document.querySelector(".one-result[data-task-id='" + 200 + "']");
      taskSelected.remove();
      deleteTask(1);
      deleteTask(2);
      deleteTask(3);
      deleteTask(4);
      createQuestion(Qcount+1);
      createChoice(Qcount+1);
      createResult(taskId);
      Qcount++;
    }else{
      var taskSelected = document.querySelector(".one-question[data-task-id='" + 100 + "']");
      taskSelected.remove();
      var taskSelected = document.querySelector(".one-result[data-task-id='" + 200 + "']");
      taskSelected.remove();
      deleteTask(1);
      deleteTask(2);
      deleteTask(3);
      deleteTask(4);
      quizEnd();
    }
    
  }  
      
}




// startQuiz();
pageContentEl.addEventListener("click", startQuiz);




  

