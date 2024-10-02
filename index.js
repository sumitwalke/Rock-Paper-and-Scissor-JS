let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

console.log();

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute('id');
        computerMove();
        playMove(userChoice);
    })
})

const computerMove=()=>{
    const computerChoices = ["rock", "paper", "scissor"];
    const computerChoice = computerChoices[Math.floor((Math.random()*100)%3)];
    return computerChoice;
}

const playMove = (userChoice) => {
    const computerChoice = computerMove();
    console.log("User Choice => ",userChoice);
    console.log("Computer Choice => ",computerChoice);
    let userWin = true;
    if(computerChoice === userChoice){
        msgHandler("draw");
    }
    else{
        if(userChoice=="rock"){
            // computerChoice = paper/scissor
            userWin = computerChoice == "paper" ? false : true; 
        }
        else if(userChoice=="paper"){
            // computerChoice = rock/scissor
            userWin = computerChoice == "rock" ? true : false;
        }
        else if(userChoice=="scissor"){
            // computerChoice = rock/paper
            userWin = computerChoice == "paper" ? true : false;
        }
        scoreHandler(userWin)
    }
}

const msgHandler=(msgType, userChoice, computerChoice)=>{
    let message = document.getElementById('msg')
    if(msgType=="user"){
        message.innerHTML = `You win!!`;
        message.style.backgroundColor = "green"
    }
    else if(msgType=="computer"){
        message.innerHTML = `You lose!!`;
        message.style.backgroundColor = "red"
    }
    else{
        message.innerHTML = "Draw!! Go again";
        message.style.backgroundColor = "lightblue"
    }
}

const scoreUpdater=(userwin, userScore, computerScore)=>{
    if(userwin){
        let score = document.getElementById('user-score');
        score.innerText = userScore;
    }else{
        let score = document.getElementById('computer-score');
        score.innerText = computerScore;
    }
}


const scoreHandler=(userWin)=>{
    if(userWin){
        userScore++;
        msgHandler("user");
    }else{
        computerScore++;
        msgHandler("computer");
    }  
    scoreUpdater(userWin, userScore, computerScore);
}