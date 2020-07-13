import _store from "../store.js"
import List from "../Models/List.js";


//Public
class ListService {



  addItem(rawItemData, listId) {
    let foundListIndex = _store.State.lists.findIndex(list => list.id == listId)

    _store.addItem(foundListIndex, rawItemData)
    _store.saveState()
  }

  addList(rawListData) {
    let currentList = new List(rawListData)
    _store.addList(currentList)
    _store.saveState()
  }

}


const SERVICE = new ListService();
export default SERVICE;
