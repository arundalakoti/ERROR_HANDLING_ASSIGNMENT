// *****************************************************************************************************************************
// 1. Type Conversion.
// *****************************************************************************************************************************

const convertToNumber = (num) => {
  try {
    if (isNaN(Number(num))) {
      throw "Invalid number";
    }
  } catch (e) {
    console.log("Error:", e);
  }
};

convertToNumber("123");
convertToNumber("qwdqdw");
convertToNumber("qwd");

// *****************************************************************************************************************************
// 2. Building Robust Functions in JavaScript
// *****************************************************************************************************************************

const getPerson = (obj) => {
  try {
    if (
      typeof obj !== "object" ||
      obj.name === undefined ||
      obj.age === undefined
    ) {
      throw "Invalid parameter type";
    }

    return `Name: ${obj.name}, Age: ${obj.age}`;
  } catch (e) {
    console.log("Error:", e);
  }
};

console.log(getPerson({ name: "Mithun", age: 20 }));
getPerson({ name: "Mithun" }) && console.log(getPerson({ name: "Mithun" }));
getPerson(["name", "Mithun"]) && console.log(getPerson(["name", "Mithun"]));

// *****************************************************************************************************************************
// 3. Car Description Class.
// *****************************************************************************************************************************

class Car {
  constructor(year, company, model) {
    this.year = year;
    this.company = company;
    this.model = model;
  }
  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}

const myCar1 = new Car(2022, "Skoda", "Rapid");

console.log(myCar1.getDescription());

// *****************************************************************************************************************************
// 4. Employee Class Challenge.
// *****************************************************************************************************************************

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const emp1 = new Employee("Suresh", "Manager", "80000");

console.log(emp1.getSalary());

// *****************************************************************************************************************************
// 5. Implementing a Person Class with Default Values
// *****************************************************************************************************************************

class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("Suresh", 20);
const person2 = new Person();

console.log(person1.getDetails());
console.log(person2.getDetails());

// *****************************************************************************************************************************
// 6. Using Static Method to Add Two Numbers with Calculator Class
// *****************************************************************************************************************************

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(3, 4));

// *****************************************************************************************************************************
// 7. Password Checker.
// *****************************************************************************************************************************

class User {
  #username;
  #password;

  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }

  getPassword() {
    let pass = "";
    for (let i = 0; i < this.#password.length; i++) {
      pass += "*";
    }
    return pass;
  }

  setPassword(newPassword) {
    let hasNumber = false;
    let hasUpperCaseAlphabet = false;

    for (let i = 0; i < newPassword.length; i++) {
      if (
        !isNaN(Number(newPassword[i])) &&
        Number(newPassword[i]) >= 0 &&
        Number(newPassword[i]) <= 9
      ) {
        hasNumber = true;
      } else if (newPassword[i] == newPassword[i].toUpperCase()) {
        hasUpperCaseAlphabet = true;
      }

      if (hasNumber && hasUpperCaseAlphabet) {
        break;
      }
    }

    if (hasNumber && hasUpperCaseAlphabet && newPassword.length >= 8) {
      this.#password = newPassword;
    } else {
      return "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.";
    }
  }
}

const user1 = new User("arun", "a1aaaaddds");

console.log(user1.getPassword());

const user2 = new User("arun", "aaaaaaddds");

console.log(user2.setPassword("mypassword"));

const user3 = new User("arun", "aaaaaaddds");

console.log(user3.setPassword("Mypassword"));

const user4 = new User("arun", "aaaaaaddds");

user4.setPassword("Mypassword123456789") &&
  console.log(user4.setPassword("Mypassword123456789"));
console.log(user4.getPassword());

const user5 = new User("arun", "aaaaaaddds");

console.log(user5.setPassword("mypassword123"));

// *****************************************************************************************************************************
// 8. Adding a Method to a Prototype.
// *****************************************************************************************************************************

class Student {
  constructor(name) {
    this.name = name;
  }
}

Object.prototype.printDetails = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const student = new Student("Dipesh");

student.printDetails();

// *****************************************************************************************************************************
// 9. Check the presence using closures.
// *****************************************************************************************************************************

function numberChecker(nums) {
  return function innerFunction(num) {
    if(nums.includes(num))
      return true;

      return false;
  };
}

console.log(numberChecker([1, 2, 3, 4, 5, 6])(20));

console.log(numberChecker([1, 2, 3, 4, 5, 6])(4));


// *****************************************************************************************************************************
// 10. Filter by Category.
// *****************************************************************************************************************************

var products = [
  {name: "Shirt", category: "Clothing"},
  {name: "Pants", category: "Clothing"},
  {name: "Shirt", category: "Clothing"},
  {name: "Hat", category: "Accessories"},
  {name: "Sunglasses", category: "Accessories"},
  {name: "Shirt", category: "Clothing"},
  {name: "Shirt", category: "Clothing"},
  {name: "Hat", category: "Accessories"},
  {name: "Hat", category: "Accessories"},
]

function filterByCategory(products){
  return category = (ctg) => products.filter((val) => val.category === ctg);
}

console.log(filterByCategory(products)("Clothing"));
console.log(filterByCategory(products)("Accessories"));