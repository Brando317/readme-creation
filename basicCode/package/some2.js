``
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`Hello! My name is ${this.name} and I am ${this.age}.`);
    }
};

const newPersonFromClass = new Person("Wilem", 23);
newPersonFromClass.speak();

// Hello! My name is Wilem and I am 23
```

Use the **_new_** keyword before a function to signify a constructor. It is best practice to use uppercase naming for constructors (new **_Person()_** above^).
