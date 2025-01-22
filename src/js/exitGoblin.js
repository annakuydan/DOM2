import image from '../img/goblin.png';

export default class Goblin {
    constructor(board) {
        this.positionGoblin = null; /* текущая позиция */
        this.board = board;
        this.goblinElement = this.createGoblinElement();
    }

    createGoblinElement() { /* создаем img для гоблина */
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
            if (img && img.parentNode === cell); /* проверяем, что изображение находится в ячейке */
                img.remove(); /* удаляем изображение из всех ячеек, кроме последней */
        });

        /* получаем список ддоступных ячеек для добавления изображения гоблина */
        const availableCells = cells.filter((cell) => cell !== this.positionGoblin);
        /* выбираем случайную ячейку из доступных */
        const position = availableCells[Math.floor(Math.random() * availableCells.length)];
        /* добавляем изображение гоблина в выбранную ячейку */
        position.appendChild(goblin);
        /* обновляем позицию гоблина */
        this.positionGoblin = position;
    }
}