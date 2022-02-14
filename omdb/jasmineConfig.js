requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jQuery.3.6.0',
        underscore: 'lib/underscore1.9.2',
        backbone: 'lib/backbone.1.4.0',
        jasmine: 'lib/jasmine-4.0.0/jasmine',
        'jasmine-html': 'lib/jasmine-4.0.0/jasmine-html',
        'jasmine-boot0': 'lib/jasmine-4.0.0/boot0',
        'jasmine-boot1': 'lib/jasmine-4.0.0/boot1',
    },
    shim: {
        'jasmine-html': {
            deps: ['jasmine'],
        },
        'jasmine-boot0': {
            deps: ['jasmine', 'jasmine-html'],
        },
        'jasmine-boot1': {
            deps: ['jasmine', 'jasmine-html'],
        },
    },
});

require(['jasmine-boot0', 'jasmine-boot1'], function () {
    require(['spec/app.spec'], function () {
        //trigger Jasmine
        window.onload();
    });
});
