define(['underscore', 'backbone', 'src/collections'], function (
    _,
    Backbone,
    collections
) {
    let Film = Backbone.Model.extend({
        defaults: {
            type: 'id',
        },

        initialize: function (options) {
            console.log(options);
            this.url = `https://www.omdbapi.com/?i=${options.id}&apikey=6d7ddf73`;
        },
    });

    let FilmSearch = Backbone.Model.extend({
        defaults: _.extend({}, Film.prototype.defaults, {
            type: 'title',
        }),

        initialize: function (options) {
            this.url = `https://www.omdbapi.com/?s=${options.title}&apikey=6d7ddf73`;
        },
    });

    const lotr = new Film({ id: 'tt0120737' });
    lotr.fetch();

    const theBatmans = new collections.Films();
    const searchResults = new FilmSearch({ title: 'dark knight' });
    searchResults.fetch({
        success: function () {
            searchResults.get('Search').forEach((result) => {
                const newFilm = new Film({ id: result.imdbID });
                newFilm.fetch({
                    success: function (data) {
                        console.log(data);
                        theBatmans.add(data);
                    },
                });
            });
        },
    });

    return {
        Film,
    };
});
