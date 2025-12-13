const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

const person1 = {
  Name: "Rahul",
  Email: "rahul@gmail.com",
  City: "Delhi"
};

const person2 = {
  Name: "Amit",
  Email: "amit@gmail.com",
  City: "Mumbai"
};

console.table([person1, person2]);

output:

(index)  Name    Email             City
0        Rahul   rahul@gmail.com   Delhi
1        Amit    amit@gmail.com    Mumbai


console.table({
  Rahul: {
    Email: "rahul@gmail.com",
    City: "Delhi",
    Age: 22
  },
  Amit: {
    Email: "amit@gmail.com",
    City: "Mumbai",
    Age: 23
  }
});


Output :

(index)   Rahul             Amit
Email     rahul@gmail.com   amit@gmail.com
City      Delhi             Mumbai
Age       22                23
