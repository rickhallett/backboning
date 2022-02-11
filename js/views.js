var Todo = Backbone.View.extend({
    id: 'id',
    text: 'text',

    tagName: 'li',

    initialise: function (attrs) {},

    render: function () {
        this.$el.html('Hello world');

        return this;
    },
});

var TodoList = Backbone.View.extend({
    el: '.container',

    render: function () {
        console.log(this);
        this.$el.html('<ul id="todolist"></ul>');

        return this;
    },
});

var todolist = new TodoList();
todolist.render();

var t = new Todo({ id: 0, text: 'Hello, world!' }).render();
console.log(t);

$('#todolist').html(t.$el);
