// literal object notation

var person = {
	nationality: 'serbian',
	name: 'Uros',
	yearBorn: 1980	
}

function Person(nationality, name, yearBorn){
	this.nationality = nationality;
	this.name = name;
	this.yearBorn = yearBorn
	this.age = function(){
		return 2017 - this.yearBorn
	}
}

var bulgarian = new Person('bulgarian', 'Ivan', 1978)
var serbian = new Person('serbian','Uros', 1980 )
var hungarian = new Person('hungarian', 'Gabor', 1976)

Person.prototype.eyeColor = 'brown';




