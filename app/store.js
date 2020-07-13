import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(rawListData => new List(rawListData));
    _state = data;
  }
}
_loadState();

class Store {

  addList(currentList) {
    _state.lists.push(currentList)
  }

  addItem(foundListIndex, rawItemData) {
    _state.lists[foundListIndex].items.push(rawItemData)
  }

  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
