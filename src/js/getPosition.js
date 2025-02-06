export default function getPosition(oldIndex) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * (15 + 1));
    } while (newIndex === oldIndex);
    return newIndex;
  }