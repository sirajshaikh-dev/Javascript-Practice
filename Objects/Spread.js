// Task 1: 
const obj = {
    a: {
       c: 3
    },
    b: 2
  }
  
  const obj2= {
    ...obj,
    a:{
      ...obj.a,
      c:40
    }
  }
//   console.log(obj)
//   console.log(obj2)
  
  //Task2: Change Email 
  const user = {
    id: 1,
    profile: { username: "coder123", email: "coder@example.com" }
  };
  
  const updateUser= {
    ...user, 
     profile: {
      ...user.profile,
      email: 'abc@gmail.com'
    }
  }
//   console.log(updateUser)
  
  //Task 3: Merging object
  const defaults = { theme: "light", notifications: true };
  const userSettings = { theme: "dark" };
  
  const merge={ ...defaults,...userSettings};
//   console.log(merge)
  
  //Task4: Create a new object updatedCar by adding a new property color: "blue" without modifying car.
  const car = { make: "Toyota", model: "Corolla", year: 2010 };
  
  const updatedCar= {...car,color: "blue"}
//   console.log(updatedCar)

  //Task 5: Create a new object updatedStudent with the science marks updated to 95.
  const student = {
    name: "John",
    marks: { math: 85, science: 40 }
  };
  
  const updatedStudent= {
    ...student,
        marks:{
            ...student.marks,
            science: 95
        }
  }
//   console.log(updatedStudent)

//Task6: Create a new object finalPreferences that combines preferences and userOverrides. If there are conflicts, the properties in userOverrides should take priority.
  const preferences = { fontSize: 14, colorScheme: "light" };
  const userOverrides = { fontSize: 16, notifications: false };

  const finalPreferences= {...preferences,...userOverrides}
//   console.log(finalPreferences)

//Task7**: Create a shallow copy copiedLibrary using the spread operator. 
//Change the title of the first book in copiedLibrary and observe whether it also affects library.
  const library = {
    name: "City Library",
    books: [{ title: "Book A" }, { title: "Book B" }]
  };
  
  const copiedLibrary= {
    ...library,
    books: library.books.map((book,index)=>
        index===0
        ?  {...book, title:"Superman"} 
        : {...book})
    
  }
//   console.log(library)
//   console.log(copiedLibrary)

 //Task8: Create a new object updatedTeam where the members array includes an additional member "Charlie". 
 // Make sure the original team object remains unchanged.

 const team = {
    name: "Developers",
    members: ["Alice", "Bob"]
  };
  
const updatedTeam= {
    ...team,
    members: [
        ...team.members,
        'charlie'
    ]
}
// console.log(team)
// console.log(updatedTeam)

// Task9: Create deepCopy of team and modify team members
const deepCopiedTeam = JSON.parse(JSON.stringify(team));
// console.log(deepCopiedTeam)

deepCopiedTeam.members.push('charlie')
// console.log(deepCopiedTeam)

deepCopiedTeam.members[0]='asur'
// console.log(deepCopiedTeam)

