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
    tagName: 'li',

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        this.$el.text(this.model.get('text'));
        this.$el.attr('class', () =>
            this.model.get('completed') ? 'strike' : null
        );
        this.$el.append([
            new CheckButtonView({
                id: this.model.get('todoId'),
                model: this.model,
            }).render().$el,
            new DeleteButtonView({
                id: this.model.get('todoId'),
                model: this.model,
            }).render().$el,
        ]);
        return this;
    },
});

var CheckButtonView = Backbone.View.extend({
    tagName: 'button',

    events: {
        click: 'onClickButton',
    },

    attributes: {
        class: 'outline',
        role: 'button',
    },

    onClickButton: function (e) {
        e.stopPropagation();
        this.model.set({ completed: !this.model.get('completed') });
    },

    render: function () {
        this.$el.text('C');
        return this;
    },
});

var DeleteButtonView = Backbone.View.extend({
    tagName: 'button',

    events: {
        click: 'onClickButton',
    },

    attributes: {
        class: 'outline',
        role: 'button',
    },

    onClickButton: function (e) {
        this.model.trigger('custom');
    },

    render: function () {
        this.$el.text('X');
        return this;
    },
});

var TodoListView = Backbone.View.extend({
    el: '#todo-list',

    initialize: function () {
        this.model.on('custom', () => {
            console.log('custom event');
        });
    },

    render: function () {
        this.model.each((todo, i) => {
            var todoView = new TodoItemView({ id: i, model: todo });
            this.$el.append([todoView.render().$el]);
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

var todoListView = new TodoListView({ model: todos });
todoListView.render();
