define(['underscore', 'backbone'], function (_, Backbone) {
    let Film = Backbone.Model.extend({
        initialize: function (options) {
            this.url = `https://www.omdbapi.com/?i=${options.id}&apikey=6d7ddf73`;
        },
    });

    const lotr = new Film({ id: 'tt0120737' });
    lotr.fetch();

    console.log(lotr);

    return {
        Film,
    };
});
