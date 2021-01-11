let numBlocks;
let board = document.querySelector('#boardgame');
let score;
let rand;
let randImg;
let block;

document.querySelector('#startGame').addEventListener('click', () => {
    numBlocks = document.querySelector('#boardSize').value;
    board.innerHTML = '';
    for (let i=1; i <= numBlocks ; i++) {
        board.innerHTML += `<div data-id="${i}" class="block"></div>`;
    }
    let sqrt = 100/Math.sqrt(numBlocks);
    document.querySelectorAll('.block').forEach((block) => {
        block.style.width = `${sqrt}%`;
        block.style.height = `${sqrt}%`;
    })

    setInterval(displayChoco, 3000);

})

function displayChoco() {
    if (rand) {
        block.style.backgroundImage = '';
    }
    rand = Math.floor(Math.random()*numBlocks) + 1;
    block = document.querySelector(`[data-id='${rand}']`);
    randImg = Math.floor(Math.random()*3) + 1;
    block.style.backgroundImage = `URL('./public/img/choco${randImg}.jpg')`;
}

