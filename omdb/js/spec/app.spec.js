define([
    'jquery',
    'underscore',
    'backbone',
    'src/eventbus',
    'src/models',
    'src/views',
    'src/collections',
    'src/utilities',
], function ($, _, Backbone, eventbus, models, views, collections, utils) {
    describe('Jasmine Test Runner', function () {
        it('should load the utils library', function () {
            expect(utils.testUtils('hello, world!')).toEqual('hello, world!');
        });

        it('should load the utils library', function () {
            expect(utils.testUtils('hello, world!')).toEqual('hello, world!');
        });
    });

    describe('Jasmine spec dependencies', function () {
        it('should load the utils library', function () {
            expect(utils.testUtils('hello, world!')).toEqual('hello, world!');
        });

        it('should load app models', function () {
            expect(models.Film).toBeDefined();
        });

        it('should load app collections', function () {
            expect(collections.Films).toBeDefined();
        });

        it('should load app views', function () {
            expect(views.FilmView).toBeDefined();
        });
    });

    xdescribe('Models', function () {});
    xdescribe('Collections', function () {});
    xdescribe('Views', function () {});
});
