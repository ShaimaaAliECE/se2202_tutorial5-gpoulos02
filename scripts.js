let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
document.getElementById("next-lbl").innerHTML = nextPlayer;


// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for(let x of document.getElementsByTagName("td")){
        let button = document.createElement("button");
        button.innerHTML = "[ ]";
        document.getElementById(x.id).appendChild(button);
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let y = event.target;
    y.innerHTML = nextPlayer;
    if(nextPlayer == "X"){
        nextPlayer = "O";
    }
    else{
        nextPlayer = "X";
    }
    document.getElementById("next-lbl").innerHTML = nextPlayer;
    y.disabled = true;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOver = document.createElement("h1");
        gameOver.innerHTML = "Game Over";
        document.getElementById('game-over-lbl').appendChild(gameOver);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let buttonNum = document.querySelectorAll('button');
    let counter = 0;
    for (let i = 0; i < buttonNum.length; i++){
        if(buttonNum[i].disabled == true){
            counter++;
        }
    }
    if (counter == buttonNum.length){
        return true;
    }
    else{
        return false;
    }
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
