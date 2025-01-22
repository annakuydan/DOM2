export default class Board {
    constructor() {
        this.gameBoard = document.querySelector('.game-board'); /* переменная содержит ссылку на элемент с классом game-board */
    }

    createGameBoard() {    /* создаем игровую доску */
        for (let i = 0; i < 4; i += 1) {
            for (let j = 0; j < 4; j += 1) {
                const cell = document.createElement('div'); /* создаем элемент с помощью метода */
                cell.classList.add('cell'); /* добавляем новый класс */
                this.gameBoard.appendChild(cell); /* вставляем элемент cell в конец доски */
            }
        }
    }

    displayGameBoard() {   /* вывод доски */
        return this.gameBoard;
    }
}