import image from '../img/goblin.png';

export default class Goblin {
    constructor(board) {
        this.positionGoblin = null; 
        this.board = board;
        this.goblinElement = this.createGoblinElement();
    }

    createGoblinElement() { 
        const goblin = document.createElement('img');
        goblin.setAttribute ('src', image);
        return goblin;
    }

    addImg() {
        const cells = Array.from(this.board.querySelectorAll('.cell'));
        const goblin = document.createElement('img');
        goblin.setAttribute('src', image);
        cells.forEach((cell) => {
            const img = cell.querySelector('img');
            if (img && img.parentNode === cell) {
                img.remove(); 
            }
        });

      
        const availableCells = cells.filter((cell) => cell !== this.positionGoblin);

        const position = availableCells[Math.floor(Math.random() * availableCells.length)];

        position.appendChild(goblin);
        
        this.positionGoblin = position;
    }
}