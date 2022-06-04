function game() {
    let stage=1
    let points=0
    let maxNumber=2
    let randomNumber= Math.floor(Math.random()*maxNumber)+ 1 
    console.log(`the random number is ${randomNumber} for testing purposes`)
    let guess = parseInt(prompt ('guess the number'))
    while (true){
        if (guess==randomNumber){
            stage+=1
            points+=1
            console.log(`You win with ${points} points, you going to stage ${stage}`)
        }
        else{
            console.log(`Game Over the number was ${randomNumber} ando you got ${points} points`)
            break
        }
        maxNumber +=1
        randomNumber = Math.floor(Math.random()*maxNumber)+ 1
        console.log(`the random number is ${randomNumber} for testing purposes`)
        guess = parseInt(prompt ('guess the random number'))
    }
}
let username = prompt ('enter username')
game()

while (true){   
    let retry = prompt('do you want to play again yes/no').toLowerCase()
    if (retry=='yes'){
        console.log('thank you for playing again')
        game()
    }else if (retry=='no') {
        console.log(`see you next time`)
        break
    } else {
        console.log('wrong input enter yes or no') 
        continue
    }
}