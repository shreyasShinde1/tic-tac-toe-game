// let bandNames = ['The Beatles', 'Aerosmith', 'Red Hot Chili Peppers', 'The Rolling Stones', 'Nirvana', 'Anthrax'];

// // Function to remove articles from a band name
// function removeArticles(name) {
//   let namee = name.replace(/^(a|an|the)\s+/i, ''); // Case-insensitive removal of 'a', 'an', 'the'
//   console.log(namee);
//   return namee;
// }
// console.log(bandNames);
// // Sort the band names without articles
// bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));
//  console.log(bandNames);
// // Create an <ul> element
// let ul = document.createElement('ul');
// ul.id = 'band';

// // Populate the <ul> element with <li> elements for each sorted band name
// bandNames.forEach(bandName => {
//   let li = document.createElement('li');
//   li.textContent = bandName;
//   ul.appendChild(li);
// });

// // Append the <ul> element to the DOM
// document.body.appendChild(ul);

// var fruits = ['Apple', 'Orange', 'Kiwi','Kiwi', 'Strawberry'];



//  fruits.splice()

//  console.log(fruits);

//  let numbers = [-23,12, -17, 19, -20, 0, 1,-12, -5, 5, 20]; 
//  let even = numbers.filter(value => value%2==0);
//   console.log(even);


//   var words = ['one', 'two', 'three', 'four'];



//  words.forEach(function(word) {
//    console.log(word); 
//    if (word === 'two') {
//     words.shift();
// }

//  });

//  var students = ["Simran", "Sakshi", "Komal", "Ishita", "Manya"]; 
//  var selected = students.slice(-4,-2);
//  console.log(selected);

// //  function decimalToBinary(num) {
// //   //Write you code here
// // 	return num.toString(2)
// // }
// // console.log(decimalToBinary(10));


// // let a = [1,2,3,4,5,6];

// // for( let b of a){
// //   console.log(a[b]);
// // }

// // function compare(a,b){
// //   if(a<b){
// //     return -1;
// //   }
// //   else if(a>b){
// //     return 1;
// //   }
// //   else{
// //     return 0;
// //   }
// // }

// // function calculateMinCost(str) {
// //   //your code here
// //   console.log(str);
// //   let arr =[]
// //   // const str = document.getElementById('rope-lengths').value.split(",");
// // 	str.forEach((str)=>{
// //      arr.push(parseInt(str))
// //   })

// // 	let total = 0;
// // 	arr = arr.sort(compare);
// // 	while(arr.length>=2){
// // 		let sum = arr[0] + arr[1]
// // 		let rem = []
// // 		rem.push(sum)

// // 		for(let k = 2; k < arr.length;k++){
// // 			rem.push(arr[k])
// // 		}
// // 		rem = rem.sort(compare);
// // 		arr = [...rem]
// //     console.log(sum , rem);
// // 		total = total + sum;
// // 	}

// //   console.log(total);
// // }  
// // let str = ['9','6','4','7','2']
// // calculateMinCost(str);



// // const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// // function hasKey(key) {
// //   //   write your code here 
		 
// // 	for(const k in sampleObject){   
// // 		if(key === k){
// // 			return true
// // 		}
// //   }
// // 		return false;
// // }

// // // Do not change the code below 
// // const key = prompt("Enter Key.");      

// // alert(hasKey(key));

// // function threeSum(arr, target) {
// //   // write your code here
// //     arr.sort((a, b) => a - b);
  
// //     let closestSum = arr[0] + arr[1] + arr[2];
  
// //     for (let i = 0; i < arr.length - 1; i++) {
// //       let left = i + 1;
// //       let right = arr.length - 1;
  
// //       while (left < right) {
// //         const sum = arr[i] + arr[left] + arr[right];
  
// //         if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
// //           closestSum = sum;
// //         }
  
// //         if (sum < target) {
// //           left++;
// //         } else if (sum > target) {
// //           right--;
// //         } else {
// //           // Found an exact match, so return the sum
// //           return sum;
// //         }
// //       }
// //     }
  
// //     return closestSum;
    
// //   }
// //   let arr = [-1,2,1,2,]
// //   let c = threeSum(arr,4)
// //   console.log(c);


// // function firstNonRepeatedChar(str) {
// //   // Write your code here
// //    const charCount = new Map();
 
// //    for(const char of str){
// //      if(charCount.has(char)){
// //        charCount.set(char, charCount.get(char)+1)
// //      }
// //      else{
// //        charCount.set(char,1)
// //      }
// //    }
 
// //    for(const char of str){
// //      if(charCount.get(char) === 1){
// //        return char;
// //      }
// //    }
// //    return null;
// //  }
// //  const input = prompt("Enter a string");  
// //  alert(firstNonRepeatedChar(input)); 
 
 
// // function secondHighest(arr) {
// //   //Write your code here
// //   arr.sort();
// //   console.log(arr);
// //   return arr[arr.length-2]
// // }

// // function Main() {
// //   var n = prompt("Enter the number of elements");
// //   var arr = [];
// //   for (var i = 0; i < n; i++) {
// //     arr[i] = prompt("Enter element " + (i+1));
// //   }
// //   alert(secondHighest(arr));
// // }
// // Main();

// // function fibonacci(num) {
// //   if (num === 0) {
// //     return 0;
// //   } else if (num === 1) {
// //     return 1;
// //   }

// //   let fibPrev = 0;
// //   let fibCurr = 1;

// //   for (let i = 2; i <= num; i++) {
// //     const temp = fibCurr;
// //     fibCurr = fibPrev + fibCurr;
// //     fibPrev = temp;
// //   }

// //   return fibPrev;
// // }

// // // Examples
// // console.log(fibonacci(1));  // Output: 0
// // console.log(fibonacci(5));  // Output: 3

// let str = 'nnm 28399 mnn mnnn'
// let regexp = /^n/g
// console.log(str.match(regexp));


// const submit = document.getElementById('submit')
// let url = "https://localhost:8080/";
// console.log(anchorTag);

// function updateURL(){
//   const name = document.getElementById('name').value
// 	const year = document.getElementById('year').value
//   let anchorTag = document.getElementById('hh')

// 	let newUrl = "https://localhost:8080/?name="+ encodeURIComponent(name)+ "&year=" + year;
//   console.log(newUrl);

//   anchorTag.textContent = newUrl
//   return false;
// }
// function updateURL() {
//   var name = document.getElementById("name").value;
//   var year = document.getElementById("year").value;
//   var urlString = "https://localhost:8080/?name=" + encodeURIComponent(name) + "&year=" + year;

//   document.getElementById("url").textContent = urlString;
//   return true;
// }

// function getFormvalue() {
//   //Write your code here
//   let fname = document.querySelector('#form1 input[name="fname"]').value;
// let lname = document.querySelector('#form1 input[name="lname"]').value;
// alert(fname+" "+lname);
// }

// let time = new Date().toLocaleString()
// document.getElementById("timer").innerText = time;

let button = document.querySelectorAll("button")
let player = document.querySelectorAll("div>input")
let gridContainer = document.querySelectorAll('#gridContainer')
let buttons = document.getElementById('btnContainer')
let nameContainer = document.getElementById('nameContainer')
let gameGrid = document.getElementById('game-grid')
let message = document.getElementById("message")

var player1 , player2;
let button1 = button[0];

button[0].addEventListener("click",()=>{

    player1 = player[0].value
    player2 = player[1].value

    if(player1&& player2){
        nameContainer.style.display = "none"
        gameGrid.style.display= 'block'
        buttons.style.display = 'flex'
        buttons.style.justifyContent = 'center'

        gameStart();
    }else{
        alert("please enter the both player name to start the game");
    }
})

function gameStart(){
    message.innerText = player1+", You're up"
}

var turn = 0;
var gameOn = true;
var count = 0;

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')

one.addEventListener('click', placeYourPick)
two.addEventListener('click', placeYourPick)
three.addEventListener('click', placeYourPick)
four.addEventListener('click', placeYourPick)
five.addEventListener('click', placeYourPick)
six.addEventListener('click', placeYourPick)
seven.addEventListener('click', placeYourPick)
eight.addEventListener('click', placeYourPick)
nine.addEventListener('click', placeYourPick)

function placeYourPick(event){
    if(count != 9 && gameOn){
        let playerMark = 'O'
        if(turn == 0){
            playerMark = 'X'
        }
        event.srcElement.innerText = playerMark;
        count++;

        let won = checkWinner();
        if(won){
            gameOn = false;
            if(turn){
                message.innerText = player2+" Congragulations you won!";
            }
            else{
                message.innerText = player1+" Congragulations you won!";
            }
        }else{
            if(turn){
                message.innerText = player1+", you're up"
            }
            else{
                message.innerText = player2+", you're up"
            }
        }
        if(turn){
            turn = 0;
        }
        else{
            turn++;
        }
    }
    else{
        message.innerText = "Game Completed, Click on restart for a new game"
    }
}

function checkWinner(){
    if(one.innerText=='X'&& two.innerText=='X'&& three.innerText=='X'){
        return true;
    }
    if(four.innerText=='X'&& five.innerText=='X'&& six.innerText=='X'){
        return true;
    }
    if(seven.innerText=='X'&& eight.innerText=='X'&& nine.innerText=='X'){
        return true;
    }
    if(one.innerText=='X'&& four.innerText=='X'&& seven.innerText=='X'){
        return true;
    }
    if(two.innerText=='X'&& five.innerText=='X'&& eight.innerText=='X'){
        return true;
    }
    if(three.innerText=='X'&& six.innerText=='X'&& nine.innerText=='X'){
        return true;
    }
    if(one.innerText=='X'&& five.innerText=='X'&& nine.innerText=='X'){
        return true;
    }
    if(three.innerText=='X'&& five.innerText=='X'&& seven.innerText=='X'){
        return true;
    }

    if(one.innerText=='O'&& two.innerText=='O'&& three.innerText=='O'){
        return true;
    }
    if(four.innerText=='O'&& five.innerText=='O'&& six.innerText=='O'){
        return true;
    }
    if(seven.innerText=='O'&& eight.innerText=='O'&& nine.innerText=='O'){
        return true;
    }
    if(one.innerText=='O'&& four.innerText=='O'&& seven.innerText=='O'){
        return true;
    }
    if(two.innerText=='O'&& five.innerText=='O'&& eight.innerText=='O'){
        return true;
    }
    if(three.innerText=='O'&& six.innerText=='O'&& nine.innerText=='O'){
        return true;
    }
    if(one.innerText=='O'&& five.innerText=='O'&& nine.innerText=='O'){
        return true;
    }
    if(three.innerText=='O'&& five.innerText=='O'&& seven.innerText=='O'){
        return true;
    }
    return false;
}

button[1].addEventListener('click', clearBoard)
button[2].addEventListener('click', restartGame)

function clearBoard(){
    count = 0;
    one.innerText = '';
    two.innerText = '';
    three.innerText = '';
    four.innerText = '';
    five.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';
    turn = 0;
    gameOn = true;
}

function restartGame(){
    nameContainer.style.display = 'grid'
    gameGrid.style.display = 'none'
    buttons.style.display = 'none'
    
    clearBoard();
}