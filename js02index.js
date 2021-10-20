let palyer = {
    name: "Saulgoodman",
    chips: 145
} 
let cards = []
let sum =0
let hashblack = false 
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let isAlive = true
let ns = true
let nt = true
let playerEl = document.getElementById("player-el")


playerEl.textContent= player.name + ": $" + palyer.chips

function getRandomCard() {
    let num = Math.random()*13 +1
    let x = Math.floor(num)
    if(x === 1)
    x = 11
     else if(x > 10)
     x = 10
    return x
}

function start() {
    if(nt === true && ns === true)
    {
        let firstcard = getRandomCard()
        let secondcard = getRandomCard()
        sum = sum + firstcard + secondcard
        cards = [
    firstcard,
    secondcard
        ]
        start2()
        ns = false

    }
    
    
}

function start2() {
    if(sum <= 20)
    message = "do u want to draw a new card ?"
    
    else if(sum === 21){
        message = "whoo! you've got Blackjack"
        hashblack= true
        
    }
    
    else {
        message = "You're out of game !"
        isAlive = false
    }
    
    cardsEl.textContent = "Cards: "
    
    for (let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += " "+ cards[i]
    }
    
    messageEl.innerText = message
    
    sumEl.textContent = "Sum : " + sum
    
}


function newcard() {
    if (hashblack === false && isAlive === true && ns === false)
    {
        let thirdcard = getRandomCard()
        cards.push(thirdcard)
        sum = sum + thirdcard
        start2()
        nt =false
    }
    
}
