(function(window, document) {

  'use strict';

  let app = new Vue({
    el: '#app',

    data: {
      todos: []
    },

    methods: {
      addTodo: function(e) {
        e.preventDefault();

        Store.dispatch(Actions.Todos.addTodo(this.text));

        this.text = '';
      },

      toggleTodo: function(index) {
        Store.dispatch(Actions.Todos.toggleTodo(index));
      },

      removeTodo: function(index) {
        Store.dispatch(Actions.Todos.removeTodo(index));
      }
    }
  });

  var render = () => {
    app.todos = Store.getState().todos.todos;
  };

  render();

  Store.subscribe(() => {
    render();
  });

  console.log(Store);


})(window, document);