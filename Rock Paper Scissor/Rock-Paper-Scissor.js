const Choices = ["rock","paper","scissor"];

while(true){
    var i = Math.floor(Math.random()*3);
    var Computer = Choices[i];
    var Player = "none";
    while(Player != "rock" && Player != "scissor" && Player != "paper"){
        Player = prompt("rock, paper, scissor? : ").toLowerCase(); 
    }
    if(Player == Computer){
        console.log("Computer's Choice : " + Computer);
        console.log("Your Choice : "+Player);
        console.log("Tie!!");
    }
    else if(Player == "rock"){
        if(Computer == "scissor"){
            console.log("Computer's Choice : " + Computer);
            console.log("Your Choice : "+Player);
            console.log("You Won!");
        }
        else{
            console.log("Computer's Choice : " + Computer);
            console.log("Your Choice : "+Player);
            console.log("You Lose!");
        }
    }
    else if(Player == "scissor"){
        if(Computer == "paper"){
            console.log("Computer's Choice : " + Computer);
            console.log("Your Choice : "+Player);
            console.log("You Won!");
        }
        else{
            console.log("Computer's Choice : " + Computer);
            console.log("Your Choice : "+Player);
            console.log("You Lose!");
        }
    }
    else if(Player == "paper"){
        if(Computer == "rock"){
            console.log("Computer's Choice : " + Computer);
            console.log("Your Choice : "+Player);
            console.log("You Won!");
        }
        else{
            console.log("Computer's Choice : " + Computer);
            console.log("Your Choice : "+Player);
            console.log("You Lose!");
        }
    }
    var response = prompt("Do you want to play again? (yes/no) : ").toLowerCase();

    if( response != "yes"){
        break;
    }      
    
}