const person = {
    name: 'john',
    age: 30,
    occupation: 'teacher',
    greet: function(){
         console.log('Hello' + ' ' + this.name)
    }
}
console.log(person.name);
console.log(person['age']);
person.greet();