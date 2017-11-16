// Objects:
// literal notation of objects

// var person = {
// 	name: 'Oggi',
// 	nationality: 'bulgarian',
// 	country: 'USA'
// }


// object constructor

function Person(name, nationality, yearBirth){
	this.name = name;
	this.nationality = nationality;
	this.yearBirth = yearBirth
}

var bulgarian = new Person('Ivan', 'bulgarian', 1978);
var serbian = new Person('Uros', 'serbian', 1980)

// prototype inheritance

Person.prototype.age = function(){
	return 2017 - this.yearBirth
}

// object extends
function Bike(wheels, color){
this.wheels = wheels;
this.color = color
}

function Car(){
Bike.apply(this, arguments)
}

var newBike = new Bike(2, 'sivler')

var newCar = new Car(4, 'green')

// class concept in ECMA6

// class Bike {
// 	constructor(wheels, color){
// 		this.wheels = wheels;
// 		this.color = color;
// 	}
// }


// class extends

class Instrument{
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
}

class Piano extends Instrument{

}

var p = new Instrument('wahlstein', 'string')


