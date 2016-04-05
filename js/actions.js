(function(window, document) {


  let TodoActions = {

    addTodo: text => {
      return {
        type: 'ADD_TODO',
        completed: false,
        text
      };
    },

    toggleTodo: index => {
      return {
        type: 'TOGGLE_TODO',
        index
      };
    },

    removeTodo: index => {
      return {
        type: 'REMOVE_TODO',
        index
      };
    },

  };

  window.Actions = {
    Todos: TodoActions
  };

})(window, document);