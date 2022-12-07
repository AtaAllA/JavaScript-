function course(_name,  _grade)
{
  
    this.name=_name;
   this.grade=_grade;
}

function student( _id, _name , _courses , _courseGrade)
{
  this.id = _id
    this.name=_name;
   this.courses=_courses;
this.courseGrade = _courseGrade
}

var g1 = new course("math" , 20)
var g2 = new course("Eng" , 30)
var g3 = new course("Elec" , 40)

var arrayOfGrades = [g1 , g2 , g3]


var std = new student(1 , "Ata" , "math" , arrayOfGrades)

var sum = 0

for(i = 0 ; i <arrayOfGrades.length ; i++){
   

    sum += std.courseGrade[i].grade


}
console.log(sum) 



var display

