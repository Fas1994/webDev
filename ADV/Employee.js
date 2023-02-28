export default class Employee {
    // class : its a predefined keyword used to define/declare the class
    // Employee : Name of the class
    // parameterized constructor
    // it is used to initialize the fields on the basis of passed values to constructor.
    constructor(eId, eName, eSalary) {
      this.empId = eId;
      this.empName = eName;
      this.empSalary = eSalary;
  
      console.log("hello from constructor");
    }
  }
  