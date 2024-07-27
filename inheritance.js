class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    celebratebirthday(){
        this.age++;
    }

    promote(){
        this.role="Senior"+this.role;
    }
}

class Employee extends Person{
    constructor(name,age,role,dept){
        super(name,age);

        this.role=role;
        this.dept=dept;
    }
}

const john = new Employee('john',32,"Web developer","IT");
//console.log(john);
john.promote();
console.log(john);