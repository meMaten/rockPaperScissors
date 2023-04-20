let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", plChR);
paper.addEventListener("click", plChP);
scissors.addEventListener("click", plChS);


let plChD = document.querySelector("#plChD"); 
let aiChD = document.querySelector("#aiChD");
let dR = document.querySelector("#dR");

let plLP = document.querySelector("#plLP");
let aiLP = document.querySelector("#aiLP");

let lifepoints = plLP.value;
let lifepointsai = aiLP.value;

let aiCh = ""
let aiOpt = ["Rock", "Paper", "Scissors"];


function aiR() { //random
    let i = Math.abs(Math.round(Math.random() * aiOpt.length - 1));
    aiCh = aiOpt[i];
    return aiCh;
}
function plChR() { //picks rock
    plChD.innerHTML = rock.innerHTML;
    aiR()
    // if (plLP.value === 0 || aiLP.value === 0 ) {
    //     rock.disabled = true;
    //     paper.disabled = true;
    //     scissors.disabled = true;
    // }  
    if (lifepoints === 0 ) {

        // dR.innerHTML = "You Lose";
        alert("you lose");

    } else if (lifepointsai === 0 ) {

        // dR.innerHTML = "You Win";
        alert("you win");

    }
    if (aiCh === "Scissors") {   

        aiChD.textContent = aiCh;
        // aiLP.value -= 40;
        aiLP.value -= 40;
        console.log("Rock smashes Scissors, Win");

    } else if (aiCh === "Paper") {

        aiChD.textContent = aiCh;
        // plLP.value -= 40;
        lifepoints -= 40;
        console.log("Paper envelops Rock, Lose");

    } else { 

        aiChD.textContent = aiCh;
        console.log("Rock equals Rock, Draw");
    }
}
function plChP() { //picks paper
    plChD.innerHTML = paper.innerHTML;
    aiR()
    // if (plLP.value == 0 || aiLP.value == 0 ) {
    //     rock.disabled = true;
    //     paper.disabled = true;
    //     scissors.disabled = true;
    // }  
    // if (plLP.value === 0 ) {
    //     dR.innerHTML = "You Lose";
    // } else if (aiLP.value === 0 ) {
    //     dR.innerHTML = "You Win";
    // }
    if (lifepoints === 0 ) {

        // dR.innerHTML = "You Lose";
        alert("you lose");

    } else if (lifepointsai === 0 ) {

        // dR.innerHTML = "You Win";
        alert("you win");

    }
    if (aiCh === "Rock") {   
        aiChD.textContent = aiCh;
        aiLP.value -= 40;
        console.log("Paper envelops Rock, Win")
        
    } else if (aiCh === "Scissors") {
        aiChD.textContent = aiCh;
        plLP.value -= 40;
        console.log("Scissors cuts Paper, Lose")
        
    } else {
        aiChD.textContent = aiCh;
        console.log("Paper equals Paper, Draw")
    }
}
function plChS() { //picks scissors
    plChD.innerHTML = scissors.innerHTML;
    aiR()
    // if (plLP.value === 0 || aiLP.value === 0 ) {
    //     rock.disabled = true;
    //     paper.disabled = true;
    //     scissors.disabled = true;
    // }  
    // if (plLP.value === 0 ) {
    //     dR.innerHTML = "You Lose";
    // } else if (aiLP.value === 0 ) {
    //     dR.innerHTML = "You Win";
    // }
    if (lifepoints === 0 ) {

        // dR.innerHTML = "You Lose";
        alert("you lose");

    } else if (lifepointsai === 0 ) {

        // dR.innerHTML = "You Win";
        alert("you win");

    }
    if (aiCh === "Paper") {   
        aiChD.textContent = aiCh;
        aiLP.value -= 40;
        console.log("Scissors cuts Paper, Win")
    } else if (aiCh === "Rock") {
        aiChD.textContent = aiCh;
        plLP.value -= 40;
        console.log("Rock smashes Scissors, Lose")
    } else {
        aiChD.textContent = aiCh;
        console.log("Scissors equals Scissors,Draw")
    }
}








