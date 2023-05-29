

const userChoice = document.querySelectorAll('[data-selection]');
let rulesModal = document.getElementById("rulesModal");
let modalBtn = document.getElementById("rulesModalBtn");
let closeModal = document.getElementById("closeBtn");

const userbtn = document.getElementById('userbtns');
const displayWinner = document.getElementById('displayWinner');
const userWinner = document.getElementById('userWinner');
const computerWinner = document.getElementById('computerWinner');
const res = document.getElementById('res');




let computerScores = 0;
let yourScores = 0;



function computerChoice() {
    let number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            computerPick = "rock"
            break;
        case 1:
            computerPick = "paper"
            break;
        case 2:
            computerPick = "scissor"
            break;
    }
    return computerPick;
}





userChoice.forEach(userChoiceButton => {
    userChoiceButton.addEventListener('click', e => {
        const userChoice = userChoiceButton.dataset.selection
        computerChoice();
        console.log(userChoice, computerPick);
        winner(userChoice, computerPick);
    })
})





const winner = (userChoice, computerPick) => {

 

 const computerScore = document.getElementById('computerScore');
 const yourScore = document.getElementById('yourScore');

   if (userChoice === computerPick) {
      
    //    console.log('tie');
       userbtn.style.display= "none";
       displayWinner.style.display= "flex";
       res.innerText="TIE";

       document.getElementById("userChoiceImg").src = "images/"+userChoice+"1.svg";
       document.getElementById("computerChoiceImg").src = "images/"+computerPick+"1.svg"; 
   }
   else if (userChoice === 'rock') {
       if (computerPick === 'scissor') {
        //    console.log('You Lost');
           
           userbtn.style.display= "none";
           displayWinner.style.display= "flex";
           computerWinner.classList.add('winner');
           res.innerText="YOU LOST";
           
           document.getElementById("userChoiceImg").src = "images/rock1.svg";
           document.getElementById("computerChoiceImg").src = "images/scissor1.svg";

           computerScores++;
           computerScore.textContent = computerScores;

       } else {
        //    console.log('You won');
           userbtn.style.display= "none";
           displayWinner.style.display= "flex";
           userWinner.classList.add('winner');
           res.innerText="YOU WIN";

           document.getElementById("userChoiceImg").src = "images/scissor1.svg";
           document.getElementById("computerChoiceImg").src = "images/rock1.svg";    
           
           yourScores++;
           yourScore.textContent = yourScores;
       }
   } else if (userChoice === 'paper') {
       if (computerPick === 'rock') {
        //    console.log('You Won');
           userbtn.style.display= "none";
           displayWinner.style.display= "flex";
           userWinner.classList.add('winner');
           res.innerText="YOU WIN"; 

           document.getElementById("userChoiceImg").src = "images/paper1.svg";
           document.getElementById("computerChoiceImg").src = "images/rock1.svg";

           yourScores++;
           yourScore.textContent = yourScores;
           
       } else {
        //    console.log('You Lost');
           userbtn.style.display= "none";
           displayWinner.style.display= "flex";
           computerWinner.classList.add('winner');
           res.innerText="YOU LOST";

           document.getElementById("userChoiceImg").src = "images/rock1.svg";
           document.getElementById("computerChoiceImg").src = "images/paper1.svg"; 
           
           computerScores++;
           computerScore.textContent = computerScores;
       
       }
   }
   else if (userChoice === 'scissor') {
       if (computerPick === 'paper') {
        //    console.log('You won');
           userbtn.style.display= "none";
           displayWinner.style.display= "flex";
           userWinner.classList.add('winner'); 
           res.innerText="YOU WIN";

           document.getElementById("userChoiceImg").src = "images/scissor1.svg";
           document.getElementById("computerChoiceImg").src = "images/paper1.svg"; 

           yourScores++;
           yourScore.textContent = yourScores;
          
    
       } else {
        //    console.log('You lost');
           userbtn.style.display= "none";
           displayWinner.style.display= "flex";
           computerWinner.classList.add('winner'); 
           res.innerText="YOU LOST"; 

           document.getElementById("userChoiceImg").src = "images/paper1.svg";
           document.getElementById("computerChoiceImg").src = "images/scissor1.svg"; 

           computerScores++;
           computerScore.textContent = computerScores;
        
       }
   }
}

function playAgain(){
    userbtn.style.display= "flex";
    displayWinner.style.display= "none";
    computerWinner.classList.remove('winner');
    userWinner.classList.remove('winner');
}

function openModal(){
    rulesModal.style.display= "block";
}

closeModal.onclick = function closeModal(){
    rulesModal.style.display= "none";
}

function updateWindow(){
    userbtn.style.display= "none";
    displayWinner.style.display= "flex";
    computerWinner.classList.add('winner');
}
