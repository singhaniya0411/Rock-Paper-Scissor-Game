let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorbtn = document.getElementById("Scissor");
let compscore = document.getElementById("compscore");
let userscore = document.getElementById("userscore");
let stopbutton = document.getElementById("letsStop");
let startbutton = document.getElementById("start");

let msg = document.getElementById("msg");

let boxes = document.querySelectorAll(".btn");
let a = 0;
let b = 3;

let photo = ["<img src=images/paper.png width=200px alt=''>", "<img src=images/rock.png width=200px alt=''>", "<img src=images/scissors.png width=200px alt=''>"];

const winPattern = [
    [0, 1], [1, 2], [2, 0]
]

const enablebtn = () => {
    for (const box of boxes) {
        box.disabled = false;
    }
    for (let box of boxes) {
        box.classList.remove("hide");
    }
    
    startbutton.classList.add("hide");

    stopbutton.classList.remove("hide");
}
const disbalebtn = () => {
    for (let box of boxes) {
        box.classList.add("hide");
    }
    startbutton.classList.remove("hide");
    stopbutton.classList.add("hide");
    setTimeout(() => {
        msg.innerText = `_Result_`;
        document.querySelector(".compimage").innerHTML = "<img src=images/lets.png width=200px alt=''>";
        document.querySelector(".userimage").innerHTML = "<img src=images/start.png width=200px alt=''>";
        userscore.innerText = "0";
        compscore.innerText = "0";
    }, 4500);
    let score = userscore.innerText;
    msg.innerText = `Your score is ${score}`;





}

stopbutton.addEventListener("click", disbalebtn);
startbutton.addEventListener("click", enablebtn);
rockbtn.addEventListener("click", () => {
    document.querySelector(".userimage").innerHTML = photo[1];
    let cmp = Math.floor(a + Math.random() * b);
    document.querySelector(".compimage").innerHTML = photo[cmp];
    checkWinner(1, cmp);

})
paperbtn.addEventListener("click", () => {
    document.querySelector(".userimage").innerHTML = photo[0];
    let cmp = Math.floor(a + Math.random() * b);
    document.querySelector(".compimage").innerHTML = photo[cmp];
    checkWinner(0, cmp);
})
scissorbtn.addEventListener("click", () => {
    document.querySelector(".userimage").innerHTML = photo[2];
    let cmp = Math.floor(a + Math.random() * b);
    document.querySelector(".compimage").innerHTML = photo[cmp];

    checkWinner(2, cmp);
})

function equality(a, b) {
    let i = 0;
    let j = 0;
    if (a.length == b.length) {
        while (i < a.length && j < b.length) {
            if (a[i] === b[j]) {
                i++;
                j++;
            }
            else {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }


}

function checkWinner(x, y) {
    let arr = [x, y];
    console.log(arr);
    if (x === y) {
        document.querySelector("#msg").innerText = "Draw....🥹🥹";
        return;
    }
    for (const win of winPattern) {
        if (equality(arr, win)) {
            document.querySelector("#msg").innerText = "You Won....🥳🥳";
            document.querySelector("#userscore").innerText = parseInt(document.querySelector("#userscore").innerText) + 1;
            return;
        }
    }
    document.querySelector("#compscore").innerText = parseInt(document.querySelector("#compscore").innerText) + 1;
    document.querySelector("#msg").innerText = "You lose....😭😭";
}










