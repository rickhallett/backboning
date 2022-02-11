var TodoModel = Backbone.Model.extend({
    idAttribute: 'todoId',
    urlRoot: null,
    text: 'text',
    completed: 'completed',
});

var TodoModelCollection = Backbone.Collection.extend({
    model: TodoModel,
    url: null,
});

var TodoItemView = Backbone.View.extend({
    id: 'id',
    tagName: 'li',

    render: function () {
        this.$el.text(this.model.attributes.text);
        return this;
    },
});

var TodoListView = Backbone.View.extend({
    el: '#todo-list',

    render: function () {
        this.model.each((todo, i) => {
            var todoView = new TodoItemView({ id: i, model: todo });
            this.$el.append(todoView.render().$el);
        });
    },
});

var todos = new TodoModelCollection([
    new TodoModel({
        todoId: 0,
        text: 'Understand backbone.js fundamentals',
        completed: false,
    }),
    new TodoModel({ todoId: 1, text: 'Complete challenges', completed: false }),
    new TodoModel({
        todoId: 2,
        text: 'Complete the master app',
        completed: false,
    }),
]);

console.log('todos', todos);
console.log('todos json', todos.toJSON());

var todoListView = new TodoListView({ model: todos });
console.log(todoListView);
todoListView.render();
