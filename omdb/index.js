requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jQuery.3.6.0',
        underscore: 'lib/underscore1.9.2',
        backbone: 'lib/backbone.1.4.0',
    },
});

requirejs(['src/app']);
