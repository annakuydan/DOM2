import Board from './board';
import Goblin from './exitGoblin';

export default class Game {
    constructor() {
        this.modalEl = document.getElementById('modal');
        this.dead = document.getElementById('dead');
        this.lost = document.getElementById('lost');
        this.count = null;
        this.board = new Board();
        this.goblin = new Goblin(this.board.returnGameBoard());
        this.intervalId = null;
    }

    startGame() {
        this.board.createGameBoard();
        this.goblin.createGoblinElement();
        this.onCellClick();
        this.onButtonClick();
        this.startInterval();
    }

    startInterval() { 
        this.intervalId = setInterval(() => {
            this.goblin.addImg();
            this.lost.textContent = +this.lost.textContent + this.count;
            if(this.count !== 1) {
                setTimeout((this.count = 1), 1000);
            }
            this.checkWinner();
        }, 1000);
    }

    stopInterval() {
        clearInterval(this.intervalId); 
    }

    onCellClick() {
        const cell = document.querySelectorAll('.cell');
        for(let i = 0; i < cell.length; i += 1 ) {
            cell[i].addEventListener('click', () => {
                const img = cell[i].querySelector('img');
                if(img) { 
                    cell[i].removeChild(img);
                    this.dead.textContent = +this.dead.textContent + 1;
                } else {
                    this.lost.textContent = +this.lost.textContent + 1;
                }
                this.checkWinner();
                this.count = 0;
            });
        }
    }

    onButtonClick() { 
        const resetButton = document.querySelector('.reset');
        resetButton.addEventListener('click', () => {
            if(!this.modalEl.classList.contains('hidden')) {
                this.modalEl.classList.add('hidden');
            }
            this.stopInterval();
            this.clearGameBoard();
            this.reset();
            this.startGame();
        });
    }

    clearGameBoard() { 
        while (this.board.gameBoard.firstChild) {
            this.board.gameBoard.removeChild(this.board.gameBoard.firstChild);
        }
    }

    checkWinner() {
        if (this.dead.textContent >= 5) {
            this.stopInterval();
            this.showWinner('Победа');
        }
        if (this.lost.textContent >= 5) {
            this.stopInterval();
            this.showWinner('Вы проиграли');
        }
    }

    reset() {
        this.dead.textContent = 0;
        this.lost.textContent = 0;
    }

    showWinner() {
        const header = this.modalEl.getElementsByTagName('h2')[1];
        header.textContent = status;
        this.modalEl.classList.remove('hidden');
        this.reset();
    }
}