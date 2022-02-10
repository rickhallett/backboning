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

var firstCar = new Vehicle({ registrationNumber: 'XLI887' });

var Car = Vehicle.extend({
    start: function () {
        console.log(`Car started: ${this.attributes.registrationNumber}`);
    },
});

var bimmer = new Car({ registrationNumber: 'XLI887' });

var Vehicles = Backbone.Collection.extend({
    model: Vehicle,
    url: 'api/vehicles/collection',
});

var fleet = new Vehicles([
    new Vehicle({ registrationNumber: 'XLI887', colour: 'white' }),
    new Vehicle({ registrationNumber: 'ZNP123', colour: 'blue' }),
    new Vehicle({ registrationNumber: 'XUV456', colour: 'blue' }),
]);

// Find all the Blue cars and log them in the console.
var blueCars = fleet.where({ colour: 'blue' });
console.log(blueCars);

// Find the car with the registration number XLI887 and log it in the console.
var wanted = fleet.findWhere({ registrationNumber: 'XLI887' });
console.log(wanted);

// Remove this car from the collection.
fleet.remove(wanted);
console.log(fleet.length);

// Convert the collection to a JSON object and log it in the console.
console.log(fleet.toJSON());

// Iterate the collection and log each car in the console.
fleet.each((car) => console.log(car));
