import _store from "../store.js"
import List from "../Models/List.js";


//Public
class ListService {

  addList(rawListData) {
    let currentList = new List(rawListData)
    _store.addList(currentList)
    _store.saveState()
  }

  addItem(rawItemData, listId) {
    let foundListIndex = _store.State.lists.findIndex(list => list.id == listId)

    _store.addItem(foundListIndex, rawItemData)
    _store.saveState()
  }

  deleteList(id) {
    let index = _store.State.lists.findIndex(rawListData => rawListData.id == id)

    if (window.confirm("delete this list?")) {
      
    _store.State.lists.splice(index, 1)
    _store.saveState()
    }
  }

  // unfinished //
  deleteItem() {

    window.confirm("delete this item?")
    // ?????
    _store.saveState()
  }

}


const SERVICE = new ListService();
export default SERVICE;
