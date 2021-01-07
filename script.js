let game = (function() {
    const td = document.querySelectorAll("td");
    let player = "X";
    let checkIfATie = function() {
        let empty = false;
        td.forEach(element => {
            if(element.firstChild.textContent == "")empty = true;
        });
         return !empty;
    }    
    let resetGame = function() {
        td.forEach(element => element.firstChild.textContent = "");
        player = "X";
        return false;
    }
    let checkIfWins = function(player) {
        if((td[0].firstChild.textContent == player
        &&td[1].firstChild.textContent == player
        &&td[2].firstChild.textContent == player) 
        ||(td[3].firstChild.textContent == player
        &&td[4].firstChild.textContent == player
        &&td[5].firstChild.textContent == player)
        ||(td[6].firstChild.textContent == player
        &&td[7].firstChild.textContent == player
        &&td[8].firstChild.textContent == player)
        ||(td[0].firstChild.textContent == player
        &&td[3].firstChild.textContent == player
        &&td[6].firstChild.textContent == player)
        ||(td[1].firstChild.textContent == player
        &&td[4].firstChild.textContent == player
        &&td[7].firstChild.textContent == player)
        ||(td[2].firstChild.textContent == player
        &&td[5].firstChild.textContent == player
        &&td[8].firstChild.textContent == player)
        ||(td[0].firstChild.textContent == player
        &&td[4].firstChild.textContent == player
        &&td[8].firstChild.textContent == player)
        ||(td[2].firstChild.textContent == player
        &&td[4].firstChild.textContent == player
        &&td[6].firstChild.textContent == player)){
                (player == "X"? alert("Player1 Wins!"): alert("Player2 Wins!"));
                 return resetGame();
          }
          else if(checkIfATie()){
              alert("It's a Tie!");
              return resetGame();
          }
          return true;
    };
    let input = function () {
        td.forEach(element => {
            element.addEventListener("click", () => {
                if(element.firstChild.textContent == ""){
                    element.firstChild.textContent = player;
                    if(checkIfWins(player))
                        (player == "X"? player = "O": player = "X");

                }
            });
            
        });
    }
    input();
    
})();
