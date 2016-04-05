(function(window, document) {

  // let combineReducers = Redux.combineReducers;
  // let createStore = Redux.createStore;

  let { combineReducers, createStore } = Redux;

  let App = combineReducers({
    todos: Reducers.Todos
  });

  window.Store = createStore(App);

})(window, document);