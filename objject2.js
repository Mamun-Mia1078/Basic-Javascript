var person = {
    nam: 'Muzammel Hoque Mamun',
    age: 22,
    skills: ['HTML,CSS,Javascript,React'],
   print: function(){
    console.log(this.nam, this.age, this.skills);
   }
}
person.print();