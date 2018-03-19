//Konstruktør for objekt Person som har egenskapene; fornavn, etternavn, alder og hårfarge.
function Person(firstName,lastName,age,hairColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
}

//Hardkodet søkeobjekt. Funksjonen under vil en person om alle egenskapene matcher.
var searchObject ={firstName:"John",lastName:"Parker",age:30,hairColor:"brown"};

//Oppretter fem personer
var person1 = new Person("John","Parker",30,"brown");
var person2 = new Person("John","Capstone",40,"red");
var person3 = new Person("Andy","Parker",32,"brown");
var person4 = new Person("John","Sunshine",31,"brown");
var person5 = new Person("John","Luminous",35,"brown");

//Legger personene over i en liste.
var persons = [person1, person2, person3, person4, person5];


function search() {
    var searchResults  = [];
    var searchParams = Object.keys(searchObject);
    for(i=0; i < persons.length; i++) {
        var truthChecker = [] // will contain boolean values "true" for each param checked.
        for(y=0; y < searchParams.length; y++) {
            if(persons[i][searchParams[y]] == searchObject[searchParams[y]]) {
                truthChecker.push(true);
            }
            if(truthChecker.length == searchParams.length) { //if all params are true, person is pushed.
                searchResults.push(persons[i]);
            }
        }
    }

    console.log(searchResults);
}
