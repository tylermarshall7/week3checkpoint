import _listsService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""

  _store.State.lists.forEach(list => template += list.Template)

  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addList(event) {
    event.preventDefault();
    let formData = event.target
    let rawListData = {
      name: formData.listName.value
    }

    formData.reset()
    _listsService.addList(rawListData)
    _drawLists()
  }

  addItem(event, listId) {
    event.preventDefault();
    let rawItemData = event.target.itemName.value
    _listsService.addItem(rawItemData, listId)
    event.target.reset()
    _drawLists()
  }

  deleteList(id) {
    _listsService.deleteList(id)
    _drawLists()
  }

  //unfinished //
  deleteItem(listId, itemIndex) {
    console.log(listId, itemIndex)
  }


}
