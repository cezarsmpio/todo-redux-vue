(function(window, document) {

  let initialState = {
    todos: []
  };

  let Todos = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              text: action.text,
              completed: action.completed
            }
          ]
        });

      case 'TOGGLE_TODO':
        return Object.assign({}, state, {
          todos: state.todos.map((todo, index) => {
            if (index == action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              });
            }

            return todo;
          })
        });

      case 'REMOVE_TODO':
        return Object.assign({}, state, {
          todos: state.todos.filter((todo, index) => {
            return index != action.index;
          })
        });

      default:
        return state;
    }
  };

  window.Reducers = {
    Todos: Todos
  };

})(window, document);