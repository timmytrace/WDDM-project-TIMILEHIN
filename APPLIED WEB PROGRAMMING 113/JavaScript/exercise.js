// const person2= {
//   firstName: "Bridget",
//   lastName: "Adekunle",
//   birthYear : 2005,
//   job: "Programmer",
//   friends: ["Katlyn", "Dumebi", "John", "Dumebi", "John"],
//   hasDriversLicense: false,
//   calcAge: function(lol){
//     this.result = 2022 - this.birthYear
//       console.log(lol)
//     return this.result
//   }
// }
// console.log(person2.calcAge())
// console.log(person2.result)


// OBJECT METHOD
const person2 = {
  firstName: "Bridget",
  lastName: "Adekunle",
 birthYear :2002,
  job: "Programmer",
  friends: ["Katlyn", "Dumebi", "John", "Dumebi", "John"],
  hasDriversLicense: false,
  calcAge : function(){
    console.log(this)
    return 2022 - this.birthYear
  }
};
person2.calcAge()
const person3 = {
  firstName: "Layo",
  lastName: "Shayo",
 birthYear :2002,
  job: "Programmer",
  friends: ["Katlyn", "Dumebi", "John", "Dumebi", "John"],
  hasDriversLicense: false,
  calcAge : function(){
    console.log(this)
    return 2022 - this.birthYear
  }
};

person3.calcAge()
