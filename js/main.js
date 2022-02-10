var Vehicle = Backbone.Model.extend({
    idAttribute: 'registrationNumber',

    urlRoot: '/api/vehicles',

    validate: function (attrs) {
        if (!attrs.registrationNumber) {
            return 'Reg is required';
        }
    },

    start: function () {
        console.log('Vehicle started');
    },
});

var bim = new Vehicle({ registrationNumber: 'XLI887' });
console.log(bim);
console.log('valid:', bim.isValid());
bim.start();

var Car = Vehicle.extend({
    start: function () {
        console.log(`Car started: ${this.attributes.registrationNumber}`);
    },
});

var brum = new Car({ registrationNumber: 'XLI887' });

console.log(brum);
console.log('valid:', brum.isValid(), brum.validationError);
brum.start();
