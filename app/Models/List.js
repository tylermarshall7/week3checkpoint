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
        <form onsubmit="app.ListController.addItem(event, '${this.id}')">
          <div class="form-group">
            <label for="itemName">Item Name</label>
              <input type="text" name="itemName" class="form-control" placeholder="Enter list item...">
                            </div>
                            <button type="submit" class="btn btn-outline-success">Add item</button>
                        </form>
    `
    this.items.forEach(item => template += `<p>${item}</p>`)

    template += '</div>'

    return template
  }
}
