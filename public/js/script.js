let numBlocks;
let board = document.querySelector('#boardgame');

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
debugger;
})