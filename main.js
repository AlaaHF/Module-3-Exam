// Dice Game
'use strict';

// Part 1

// Global Variables
let houseDie = 0;
let playerDie = 0;
let bet = document.getElementById('bet-input').value;
let funds = 5000;
let totalFunds = document.getElementById('funds').innerHTML = bet + funds;

// Event Listeners
document.getElementById('play-btn').addEventListener('click', playGame);
document.getElementById('purchase-btn').addEventListener('click', purchaseItem);

function playGame() {
    document.getElementById('dice').style.visibility = 'visible';
    let randNumHouse = Math.floor(Math.random() * 6) + 1;
    console.log(randNumHouse);

    let randNumPlayer = Math.floor(Math.random() * 6) + 1;
    console.log(randNumPlayer);

    if(randNumPlayer > randNumHouse) {
        document.getElementById('funds').innerHTML = totalFunds;
        totalFunds = funds + bet;
    } else if (randNumPlayer == randNumHouse) {
        document.getElementById('funds').innerHTML = totalFunds;
        totalFunds = funds;
    } else {
        document.getElementById('funds').innerHTML = totalFunds;
        totalFunds = funds - bet;
    }

    if (totalFunds < 0) {
        document.getElementById('funds') = '0';
        totalFunds = 0;
    }

    if (randNumHouse < 2) {
        document.getElementById('house-die').src = 'images/1.png';
    } else if (randNumHouse < 3) {
        document.getElementById('house-die').src = 'images/2.png';
    } else if (randNumHouse < 4) {
        document.getElementById('house-die').src = 'images/3.png';
    } else if (randNumHouse < 5) {
        document.getElementById('house-die').src = 'images/4.png';
    } else if (randNumHouse < 6) {
        document.getElementById('house-die').src = 'images/5.png';
    }  else if (randNumHouse < 7) {
        document.getElementById('house-die').src = 'images/6.png';
    }

    

    if (randNumPlayer < 2) {
        document.getElementById('player-die').src = 'images/1.png';
    } else if (randNumPlayer < 3) {
        document.getElementById('player-die').src = 'images/2.png';
    } else if (randNumPlayer < 4) {
        document.getElementById('player-die').src = 'images/3.png';
    } else if (randNumPlayer < 5) {
        document.getElementById('player-die').src = 'images/4.png';
    } else if (randNumPlayer < 6) {
        document.getElementById('player-die').src = 'images/5.png';
    }  else if (randNumPlayer < 7) {
        document.getElementById('player-die').src = 'images/6.png';
    }

    
}


function purchaseItem() {
    let randImg = Math.random();
    if (totalFunds < 1000) {
        document.getElementById('loot').src = 'images/socks.png';
    } else if (totalFunds > 1000 && totalFunds < 5000) {
        if (randImg < 0.33) {
            document.getElementById('loot').src = 'images/ring.png';
            totalFunds = funds - 1000;
        } else if (randImg < 0.66) {
            document.getElementById('loot').src = 'images/bike.png';
            totalFunds = funds - 1000;
        } else {
            document.getElementById('loot').src = 'images/trip.png';
            totalFunds = funds - 1000;
        }
    } else {
        if (randImg < 0.25) {
            document.getElementById('loot').src = 'images/motorcycle.jpg';
            totalFunds = funds - 5000;
        } else if (randImg < 0.50) {
            document.getElementById('loot').src = 'images/boat.png';
            totalFunds = funds - 5000;
        } else if (randImg < 0.75) {
            document.getElementById('loot').src = 'images/car.png';
            totalFunds = funds - 5000;
        } else {
            document.getElementById('loot').src = 'images/house.png';
            totalFunds = funds - 5000;
        }
    }
}