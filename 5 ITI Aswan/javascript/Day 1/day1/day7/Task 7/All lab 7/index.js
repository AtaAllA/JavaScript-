class Person {
    constructor(name, age, address) {

        this.name = name
        this.age = age
        this.address = address

        // person can not be inestanced

        if(this.constructor==Person)
        {
            throw 'error this is abstract class'
        }

    }
}

class Employee extends Person
{
    static count = 0
    static #member
    constructor(name , age , address , HTRuels , salary)
    {
        super(name,age , address , salary) 
        this.HTRuels = HTRuels
        this.salary =salary       
    }

    static displayHTRules(){
        console.log("static is shared for all objects in the class && member it is private for the object which in the class")

    }


    static getCount(){
        Employee.count++
        return Employee.count
    }



    setID(x)
    {

        this.#member=x;
        console.log("Setter is better")
    }



    getID()
    {
        return this.#member;
        console.log("getter is better")
    }

    showSalary()
    {
        console.log(this.salary)
    }
    increaseSalary()
    {
        console.log("total increased salary is"  , this.salary +200)
    }
    

}

var e1 = new Employee("Ata" , 20 , "ddd","hj" , 2000 )
Employee.getCount()
Employee.displayHTRules()
console.log(Employee.getCount())
// Employee.setID()
// Employee.getID()
// e1.showSalary()


e1.showSalary()
e1.increaseSalary()




class Student extends Person
{
    constructor(name , age , address , id)
    {
        super(name,age , address) 
        this.id = id
    }
}

literalobj = {
    name : "Ata" , 
    lacation : "Aswan" , 
    Address : {
        city : "Sahary" , 
        street : "fjhgds" , 
        zipCode : "2255" , 
    }
    
}

var data;

function displayContent(){
    // console.log(" name is " +literalobj.name ,  " location is"  + literalobj.lacation , " Address is"+ literalobj.Address)
    console.log(literalobj.name , literalobj.lacation , literalobj.Address )
}

displayContent()





var array = [6, 4, 8, 9, 12];
      
var Max_array = Math.max(...array);

console.log("Values of the array are:" , array)

console.log("The maximum value in the array is :" , Max_array)

var Max_array = Math.min(...array);

console.log("The minimum value in the array is :" , Max_array)






var fruitsArr = ["apple", "strawberry", "banana", "orange", "mango"] 


fruitsArr.forEach(function (x) {

 if(isNaN(x)){
    console.log("String ya basha")

 }
 
 else{ 

     console.log("no a string")
    
    }

    });

    fruitsArr.forEach(function (x) {

        if(x.indexOf("a",0)==0)
        {
           console.log(x , "starts with a")
        }
        else {  console.log(x , " not starts with a")}


           }

    )
var filteredArr=[];

    fruitsArr.forEach(function (x) {


        if(x.indexOf("b",0)==0 || x.indexOf("s",0)==0 )
{
    filteredArr.push(x)
}

    }
    
    )
    console.log(filteredArr)

var i=0;

    fruitsArr.forEach(function (x) {

    for(i=0;i<filteredArr.length;i++)
    {
        if(filteredArr[i]==x){
            console.log (x)
        }
    }

}    )




var countries=["America","England","Frace","England","Romainia","Kroatia" , "Kroatia" , "Egy" , "Egy"] ;

var lengthOfCountryArr = countries.length

var s1=new Set(countries)

var x=lengthOfCountryArr-s1.size

console.log("The number of repeated Countries is" , x)