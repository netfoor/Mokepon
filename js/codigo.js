function random(minimumRange, maximumRange){
    return Math.floor(Math.random() * (maximumRange - minimumRange + 1) + minimumRange)
}

function choice(move){
    let result = ""
        if (move == 1)
        {
            result = "Rock"
        }
        else if (move == 2)
        {
            result = "Paper"
        }
        else if (move == 3)
        {
            result = "scissor"
        }
        else 
        {
            result = "poorly chosen" 
        }
    return result
}

function combat(playerOne, playerTwo){
        let result = ""
            if (playerOne == playerTwo)
            {
                result = "There is a tie"
            } 
            else if (playerOne == 1 && playerTwo == 3 || playerOne == 2 && playerTwo == 1 || playerOne == 3 && playerTwo == 2)
            {
                result = "You win!!"
                timesWon += 1
            } 
            else 
            {
                result = "You lost"
                lostTimes += 1
            }

        return result
}

let playerChoice = 0 
let pcChoice = 0
let lostTimes = 0
let timesWon = 0

while (timesWon < 3 && lostTimes < 3)
{
    playerChoice = prompt("Choose\n1. rock\n2. paper\n3. scissor")
    pcChoice = random(1,3)

    alert("You chose: " + choice(playerChoice))
    alert("PC choses: " + choice(pcChoice))
    alert(combat(playerChoice, pcChoice)) 
}

if (timesWon == 3)
{
    alert(`You win this game\nYou win: ${timesWon} times\nYou lose: ${lostTimes} times`)
} 
else 
{
    alert(`PC win this game\nYou win: ${timesWon} times\nYou lose: ${lostTimes} times`)
}
           
