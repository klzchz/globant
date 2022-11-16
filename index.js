/* 
    @author Lucas Souza de Andrade
    @email lucas.souza@globant.com 

 Rules for counting points for each match:

     if x > y - 3 points
     if x < y - 0 point
     if x = y - 1 point
 Notes:

     there are 10 matches in the championship
 0 <= x <= 4
 0 <= y <= 4 */


var matches = ["3:1", "2:2", "0:1", "2:1", "1:1", "3: 1 ", "2:2", "0:1", "2:1", "1:1"];

function countPoints(array) {
    return array.reduce((accumulator, current) => accumulator + (current[0] == current[2] ? 1 : current[0] > current[2] ? 3 : 0), 0);
}

let result = countPoints(matches);
let showValue = document.getElementById('value');
let matchesQt = document.getElementById('qtd');



// console.log(result); 

showValue.append(result);
matchesQt.append(matches.length)