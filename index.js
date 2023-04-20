// SELECTORS
// Buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let logBtn = document.querySelector("#logBtn");
// Displays
let plChD = document.querySelector("#plChD");
let aiChD = document.querySelector("#aiChD");
let dR = document.querySelector("#dR");
// LifePoints
let plLP = document.querySelector("#plLP");
let aiLP = document.querySelector("#aiLP");


// CREATE ELEMENTS
// Restart
let resBtn = document.createElement("button");
resBtn.innerHTML = "Restart";
// Match Log
let logList = document.createElement("ul");
let defItem = document.createElement('li')
let firstItem = document.createElement('li');


// LISTENERS
// Player Choice
rock.addEventListener("click", plChR);
paper.addEventListener("click", plChP);
scissors.addEventListener("click", plChS);
// Restart
resBtn.addEventListener("click", restart)
logBtn.addEventListener("click", showHide)
// 

// FUNCTIONS
// AI random
let aiCh = ""
let aiOpt = ["Rock", "Paper", "Scissors"];

function aiR() {
    let i = Math.abs(Math.round(Math.random() * aiOpt.length - 1));
    aiCh = aiOpt[i];
    return aiCh;
}

// Restart
function restart() {
    dR.innerHTML = " ";
    plLP.value = 100;
    aiLP.value = 100;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

// Log
function showHide() {
    logBtn.appendChild(logList)
}

// 
let res = ""
let resArr = []
function updateArr() {
    if (resArr.length < 5) {
        resArr.unshift(res)
    } else {
        resArr.unshift(res)
        resArr.pop()
    }  
}

// 
function dispDefItem() {
    if (firstItem.textContent == "") {
        defItem.textContent = "No Matches Played"
        logList.append(defItem)
    } 
}
dispDefItem()

function addItem() {
    
    if (firstItem.textContent == "") {
        firstItem.textContent = resArr[0]
        logList.replaceChild(firstItem, defItem)
    } else {
        for (let i = 0; i >= 0; i--) {
            let itemCount = logList.childElementCount;
            if (itemCount <= 4) {
                let folItems = document.createElement('li');
                folItems.textContent = resArr[i];
                logList.insertBefore(folItems, logList.firstElementChild);
            } else  {
                resBtn.disabled = true;
                break;
            }
        }
    }
}

// Player Options

function plChR() {
    plChD.innerHTML = rock.innerHTML;
    aiR()
    if (aiCh === "Scissors") {   
        aiChD.textContent = aiCh;
        aiLP.value -= 40;
        console.log("Rock smashes Scissors, Win")
    } else if (aiCh === "Paper") {
        aiChD.textContent = aiCh;
        plLP.value -= 40;
        console.log("Paper envelops Rock, Lose")
    } else {
        aiChD.textContent = aiCh;
        console.log("Rock equals Rock, Draw")
    }
    if (plLP.value === 0 || aiLP.value === 0 ) {
    //
    } 
    if (plLP.value === 0 ) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        res = "Defeat!";
        updateArr();
        addItem();
        dR.textContent = res;
        dR.appendChild(resBtn);
    } else if (aiLP.value === 0 ) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        res = "Victory!"
        updateArr();
        addItem();
        dR.textContent = res; 
        dR.appendChild(resBtn);
    }
}
function plChP() {
    plChD.innerHTML = paper.innerHTML;
    aiR()
    if (aiCh === "Rock") {   
        aiChD.textContent = aiCh;
        aiLP.value -= 40;
        console.log("Paper envelops Rock, Win")
    } else if (aiCh ==="Scissors") {
        aiChD.textContent = aiCh;
        plLP.value -= 40;
        console.log("Scissors cuts Paper, Lose")
    } else {
        aiChD.textContent = aiCh;
        console.log("Paper equals Paper, Draw")
    }
    //
    if (plLP.value === 0 ) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        res = "Defeat!";
        updateArr();
        addItem();
        dR.textContent = res;
        dR.appendChild(resBtn); 
    } else if (aiLP.value === 0 ) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        res = "Victory!"
        updateArr();
        addItem();
        dR.textContent = res; 
        dR.appendChild(resBtn);
    }
}

function plChS() {
    plChD.innerHTML = scissors.innerHTML;
    aiR()
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
    //
    if (plLP.value === 0 ) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        res = "Defeat!";
        updateArr();
        addItem();
        dR.textContent = res;
        dR.appendChild(resBtn)   
    } else if (aiLP.value === 0 ) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        res = "Victory!"
        updateArr();
        addItem();
        dR.textContent = res; 
        dR.appendChild(resBtn);
    }
}



