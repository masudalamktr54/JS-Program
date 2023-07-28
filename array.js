let arr1 = ["masud alam", "singalpur", 54, true, undefined]
console.log(arr1)

let arr2 = new Array() //this is empty array
console.log(arr2)

let arr3 = new Array(8)  //this is 8 endex of empty array
console.log(arr3)

let arr4 = new Array("masud", "aashu", "saba54")
console.log(arr4)

/**
 * 
 * given array  -> [11, 21, 31, 41, 51]
 * indexes/position ->  // last element index = arr.length - 1
 */


// index value access and update

console.log(arr1[2])

console.log(arr4[2])


//update

arr1[2] = "updated value"
console.log(arr1[2])

// console.log(arr1)