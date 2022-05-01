var person = {};
person.name = 'Mamun';
person.age = 32;
person.print = function(){
    console.log(this.name + 's age ' +this.age);
    
};
person.print();