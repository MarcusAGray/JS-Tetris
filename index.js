const boxes = new Array(200).fill(0);
const tetrisBox = document.getElementById('tetris-box');


function createTetrisBox() {
    for (let i = 0; i < boxes.length; i++) {
        const box = document.createElement("div");
        box.classList = "box";
        // tetrisBox.insertBefore(box, )
    
    }
}

createTetrisBox()