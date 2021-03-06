import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name || "List"
    /** @type {string[]} **/
    this.items = data.items || []
  }

  get Template() {

    let template = /* html */ `
    <div class ="col-4">
      <h1>${this.name}</h1>
        <form onsubmit="app.listController.addItem(event, '${this.id}')">
          <div class="form-group">
              <input type="text" name="itemName" class="form-control" placeholder="Enter list item...">
                            </div>
                            <button type="submit" class="btn btn-outline-success">Add item</button>
    <button class="btn btn-outline-success btn-delete" onclick="app.listController.deleteList('${this.id}')">Delete List</button>
                        </form>
    `
    this.items.forEach( (item, itemIndex) => template += `<p>${item}${itemIndex}</p>
    <button class="btn btn-outline-success btn-delete" onclick="app.listController.deleteItem('${this.id}','${itemIndex}')">Delete</button>`)

    template += '</div>'

    return template
  }
}
