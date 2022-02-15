define(['underscore', 'backbone', 'src/models'], function (
    _,
    Backbone,
    models
) {
    let Films = Backbone.Collection.extend({
        model: function (attrs, options) {
            // console.log(attrs, options);
            // debugger;
            if (attrs.type !== 'id') {
                throw new Error('unknown model type:', attrs.type);
            }

            return new models.Film(attrs, options);
        },
    });

    return {
        Films,
    };
});
