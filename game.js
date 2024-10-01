let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
return options[randIdx];
}
const drawGame=()=>{
    console.log(" game was draw");
    msg.innerText="Game draw.Play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
       console.log("You win");
       msg.innerText=`you win! your ${userChoice}  beats ${compChoice}`;
       msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compscorepara.innerText=compScore;
        console.log("computer win");
        msg.innerText=`you lose. Comp ${compChoice}  beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}
const playGame = (userChoice)=>{
    console.log("user choice is =",userChoice);

//genertate computer choice
const compChoice=genCompChoice();
console.log("comp choice is =",compChoice);
if(userChoice===compChoice){
    //draw game
drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock")
    //scissor, paper
userWin=compChoice==="paper"?false:true;
 else if(userChoice==="paper"){
    //rock,scissor
    userWin=compChoice==="scissor"?false:true;
    
    }
    else{
        //rock,paper
        compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) =>{
    choice.addEventListener("click" ,()=>{
        const userChoice=choice.getAttribute("id");

playGame(userChoice);
    });
}) ;
