

function  highestScorer(playerInfo) {
   var highestScorer = playerInfo[0][0];
   var highestScore = playerInfo[0][1];
   for( var x=1; x < playerInfo.length ; x++){
    if(highestScore < playerInfo[x][1]){
        highestScore = playerInfo[x][1];
        highestScorer = playerInfo[x][0];
    }
   }

   return highestScore;
}

playerInfo =
 [
    ["Ashrafull",76],
    ["Mashrafi",96],
    ["ridoy",86],
    ["sakib",56],
    ["liton",36]
 ]
    

 var result = highestScorer(playerInfo);
 document.write("HighestScorer =" + result);
