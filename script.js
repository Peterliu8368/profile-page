let numOfRequestElement = document.querySelector(".num-of-request");
let count = numOfRequestElement.innerText;
let connectionCount = document.querySelector(".num-of-connection").innerText;

function changeName() {
    document.querySelector("#profile-name").innerText = "Peter Liu";
}

function decline(num) {
    document.querySelector(`.friend-request${num}`).remove();
    count --;
    document.querySelector(".num-of-request").innerText = count;
}

function accept(num) {
    document.querySelector(`.friend-request${num}`).remove();
    count --;
    connectionCount++;
    document.querySelector(".num-of-request").innerText = count;
    document.querySelector(".num-of-connection").innerText = connectionCount;
}


