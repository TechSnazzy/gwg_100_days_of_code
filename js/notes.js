// example

var Person = function(name) {
  this.name = name;
}

Person.prototype.display = function(greeting) {
  console.log(greeting + " " + this.name);
};

var new_person = new Person("Poornima");
new_person.display("Good evening");
