var database = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
      state: "Gujarat",
      city: "Surat",
    },
  },
  {
    firstName: "rahul",
    lastName: "go",
    age: 10,
    address: {
      state: "gujarat",
      city: "baroda",
    },
  },
  {
    firstName: "rahul",
    lastName: "go",
    age: 30,
    address: {
      state: "Gujarat",
      city: "baroda",
    },
  },
  {
    firstName: "arr",
    lastName: "ar",
    age: 30,
    address: {
      state: "Rajasthan",
      city: "Jaipur",
    },
  },
  {
    firstName: "hgf",
    lastName: "lkk",
    age: 18,
    address: {
      state: "Gujarat",
      city: "Surat",
    },
  },
  {
    firstName: "ravi",
    lastName: "rv",
    age: 5,
    address: {
      state: "Rajasthan",
      city: "kota",
    },
  },
  {
    firstName: "abc",
    lastName: "xy",
    age: 50,
    address: {
      state: "Rajasthan",
      city: "AjMer",
    },
  },
];

//  QUE
// create function for all
// 1. get all person from state gujarat
// let task1_val = "gujarat"
// const task1 =(data)=>{

//     let stateGujarat = database.filter((d)=> d.address.state.toLocaleLowerCase() === data.toLocaleLowerCase() )
//     return stateGujarat

// }
// // task1(task1_val)
// var it = task1(task1_val)
// console.log(it);
// 2. get all person from state gujarat and city Surat

// let stateGujarat = database.filter((d)=> d.address.state === "gujarat" && d.address.city )
// console.log(stateGujarat);

// let task2_val = "gujarat"
// const task1 =(data)=>{

//     let stateGujarat = database.filter((d)=> d.address.state.toLocaleLowerCase() === data )
//     console.log(stateGujarat);

// }
// task1(task1_val)

// 3. get all person from state gujarat and and age lessthen equal to 20

// let stateGujarat = database.filter((d)=> d.address.state === "Gujarat" && d.age <= 20 )
// console.log(stateGujarat);

// 4. get all person from state Rajasthan and or age gretrthen equal to 30

// let stateGujarat = database.filter((d)=> d.address.state === "Rajasthan" && d.age >= 30 )
// console.log(stateGujarat);

// 5. get 2 person from baroda

// let stateGujarat = database.filter((d)=> d.address.city === "baroda" )
// console.log(stateGujarat);

// 6. add full name in all person (firstName + lastName )

// let stateGujarat = database.map((d)=> d.firstName + " " + d.lastName )
// console.log(stateGujarat);

// 7. search in all object if any value matched return all object
// var name = "Rajasthan"
// task7 = (data)=>{

//     let stateGujarat = database.filter((d)=>
//       d.firstName == data ||  d.lastName == data ||  d.age == data ||  d.address.state == data ||  d.address.city == data

//     )
// console.log(stateGujarat);

// }
// task7(name)

// 7. search in all object if any value matched return all object
var name = "a";
task7 = (data) => {
  // let stateGujarat =
  return database.filter((d, i) => {
    return Object.values(d).find(
      (str) => typeof str === "string" && str.includes(data)
    );
  });

  // console.log(stateGujarat);
};
console.log(task7(name));

// let string = "a";
// const task8 = (data) => {
//   return database.filter((d) => d.firstName.includes(data));
// };
// console.log(task8(string));

// note : if data not found return "data not found"
