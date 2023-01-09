const myLibrary = [];

class Item {
  constructor(title, due_date) {
    this.title = title;
    this.due_date = due_date;
  }
}

function addItem(item) {
  myLibrary.push(item);
}

const pictures = new Item("get pictures of spiderman!", "JAN 20th");
const flowers = new Item("buy flowers", "JAN 20th");

addItem(pictures);
addItem(flowers);

export { myLibrary };
