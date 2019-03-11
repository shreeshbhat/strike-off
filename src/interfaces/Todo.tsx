export class Todo {
  checked: boolean;
  text: string;
  index: string;

  constructor(index: string = new Date().toISOString(), text: string, checked: boolean = false) {
    this.index = index;
    this.text = text;
    this.checked = checked;
  }
}
