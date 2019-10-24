var answerBlock  = document.querySelectorAll(".multiplechoice");
var display      = document.getElementById("display");
var startButton  = document.getElementById("startReset");
var gameResult   = document.getElementById("gameResult");
var scoreDisplay = document.getElementById("score");
var time         = document.getElementById("time");  
var endResult    = document.getElementById("endresult");
var idq           = document.getElementById("id");
var correctAnswer,x,y,a,b,k,arr,j,score = 0;
var array,count=50 ;



function generateMultiplePair(){
     x = Math.floor(Math.random()*21);
     y = Math.floor(Math.random()*11);
    //console.log(x);
    //console.log(y);
    idq.textContent = x + "*" + y;
    return x*y;
    
}

function creatingChoice(){
     arr = [];
     j = Math.floor(Math.random()*4);
            arr[j] = x*y;
            
                number();
                if(j!=0)
                {
                    arr[0]=a*b;
                }
                if(j!=1)
                {
                    array1();
                }
            
                if(j!=2)
                {
                      array2();
                }  
                if(j!=3)
                {
                    array3();
                 }
                
            return arr;   
}

function number(){
                 a = Math.floor(Math.random()*21);
                 b = Math.floor(Math.random()*11);
                if((x*y) == (a*b))
            {
                number();  
            }
        
}



function array1(){
    number();
   // console.log("multi " + a*b);
    if(arr[0]!= a*b)
    {
        arr[1] = a*b;
     //   console.log("arr[1] " + arr[1]);
    }else{
      //  console.log("inside array");
        array1();
    }
}

function array2(){
    number();
                    if(arr[0] != a*b && arr[1] != a*b && arr[0] != arr[1])
                    {
                        arr[2] = a*b;
                    }else{
                        array2();
                    }
}

function array3(){
    number();
                    if( arr[0] != a*b && arr[1] != a*b && arr[2] != a*b && arr[1] != arr[2])
                    {
                        arr[3] = a*b;
                    }else{
                        array3();
                    }
}

//add event on button
startButton.addEventListener("click", start);


function counter(){
    var funcNameHere = function(){
        if(count == 0){
                for(var i=0; i<4 ; i++)
                {
                    answerBlock[i].removeEventListener("click" , make);
                }
                startButton.removeEventListener("click", start);
                idq.textContent = "";
                endResult.classList.remove("display");
                endResult.textContent = "Your Score Is : " + scoreDisplay.textContent;
                clearInterval(q);
            }
  
        else {
            count--;
            time.textContent = count;
        }
    };
        var q=setInterval(funcNameHere , 1000);
        funcNameHere();
        return;
        
}


function make(){
    if(this.textContent == correctAnswer)
            {
                score++;
                scoreDisplay.textContent = score;
                this.style.backgroundColor = "greenyellow";
               /* gameResult.style.backgroundColor = "lightgreen"
                gameResult.style.boxShadow =  "0 5px rgb(65, 228, 133)";               
                gameResult.textContent = "Correct";*/
                correctAnswer = generateMultiplePair();
                array = creatingChoice();
                for(var i = 0 ; i < 4 ; i++)
                {
                    answerBlock[i].textContent = array[i];
                    answerBlock[i].style.backgroundColor = "white";
                }
            }else{
               /* gameResult.style.backgroundColor = "red";
                gameResult.style.boxShadow =  "0 5px red"; 
                gameResult.textContent = "Try Again";*/
                this.style.backgroundColor = "rgb(235, 74, 63)";
            }
}

function start(){
    // generate multiplies pair and display to screen and answer;
    correctAnswer = generateMultiplePair();
    
    this.textContent = "Reset";
    //generate multiplechoice options and display
    array = creatingChoice();
    for(var i = 0 ; i < 4 ; i++)
    {
        answerBlock[i].textContent = array[i];
        answerBlock[i].style.backgroundColor = "white";
    }


    //add event listener to each block
    for(var i=0; i<4 ; i++)
    {
        answerBlock[i].addEventListener("click" , make);
    }

    //countdown start and remove event listener
    counter();
}