import getPosition from './getPosition';

export default class Gui {
  constructor() {
    [this.img] = document.images;
    [this.wrap] = document.getElementsByClassName('wrapper');
    this.header = document.getElementById('header_state');
    this.successful = document.getElementById('score_successful');
    this.unsuccessful = document.getElementById('score_unsuccessful');
    this.insertImg = this.insertImg.bind(this);
    this.oldIndex = null;
  }

  init() {
    this.img.parentElement.removeChild(this.img);
    this.createCells();
  }

  createCells() {
    for (let i = 0; i < 4 * 4; i += 1) {
      const div = document.createElement('div');
      this.wrap.appendChild(div);
    }
  }

  insertImg() {
    if (document.images[0]) this.removeImg();
    const childDivs = this.wrap.children;
    const index = getPosition();
    childDivs[index].append(this.img);
  }

  removeImg() {
    const activeDiv = document.images[0].parentElement;
    activeDiv.removeChild(this.img);
  }

  showScore(score, status) {
    this.header.innerText = status;
    this.successful.innerText = score.win;
    this.unsuccessful.innerText = score.loose;
  }
}