const students = ["Jane", "Amanda", "Hellen"];

//Reassign a value

students[1] = 'Tom';
students[2] = 'Bro'
console.log({students});

//Adding an items

// push for adding an item on the last

students.push('Susan');
console.log({students});

// unshift for adding an item at the bignning
students.unshift('Anne');
console.log({students});

//Remove an item
//pop to remove the last element
students.pop();
console.log({students});

//shift to remove the first item
students.shift();
console.log({students});

//Loops
// map
let nums =[10,20,30,40];

const double = nums.map(item => item*2);

console.log({double});

// sum of all elements
// this add the double nums
let count = 0;
nums.forEach(item => count += item);

console.log({count});

// for a count 
const total = nums.reduce((acc, item) => acc + item, 0);
console.log({total});

// for Loop

let multiples =[];
for(let i=0; i < nums.length; i++){
    multiples.push(nums[i] * [i])
}
console.log({multiples});

//filters

const items = [5,2,8,5,6,7,8];
const even = items.filter(items => items%2 ===0);
console.log({even});

//find
const discover = items.find(items => items >= 8);
console.log({discover});

//array distructing

const [a, b, ...c]=nums;
console.log({a});
console.log({b});
console.log({c});

// practicing 

let numberArray=[1, 2, 3, 4, 5];
numberArray.reverse();
console.log(numberArray);

//2
let prices=[4.50, 5.99, 3,50, 7.15];
let reversedPrices=prices.reverse();
let taxIncluded=reversedPrices.map(price=> price * 1.2);
console.log( taxIncluded);

//
let namees=["alan", "man", "opo", "mano"];
namees.reverse();
console.log(namees);

//
let nmes = ["banana", "apple", "orange", "mango"];
nmes.sort().reverse();
console.log(nmes);

//
let original = [1, 2, 3, 4, 5];
let reversedCopy = [...original].reverse();
console.log("Original:", original);
console.log("Reversed Copy:", reversedCopy);

//
const som=[1, 2, 3, 4, 5];
const hasEven=som.some(nume=> nume%2===0);
console.log(hasEven);

//
const people=[
    {name: "Alice", age: 25},
    {name: "bob", age:17},
    {name: "charline", age:30}
];
const hasMinor=people.some(person=>person.age<18);
console.log(hasMinor);

//
const people2=[
    {brand: "Google", year:2015},
    {brand: "microsoft", year:2019},
    {brand: "apple", year:2024}
];
const hasOld= people2.some(person1=>person1.year>2020);
console.log(hasOld);

//
const inputs=["username", "", "email@example.com"];
const isEmpty=inputs.some(input=>input === "");
console.log(isEmpty);
//

async function checkOnlineStatus(users) {
    const promises = users.map(user => fetch(`/status/${user.id}`).then(res => res.json()));
    const results = await Promise.all(promises);
    const isAnyoneOnline = results.some(status => status.online);
    console.log(isAnyoneOnline);
}

// length
const fruits=["Apple", "Banana", "cherry"];
console.log(fruits.length);

//
const emptyArray=[];
console.log(emptyArray.length===0);

//
const num2=[1, 2, 3, 4, 5];
num2.length=3;
console.log(num2);

//

const num3=[1,2,3,4,5,6];
num3.length=10;
console.log(num3);

//
const colors=['red', 'blue'];
colors.length=4;
console.log(colors);

//

const fru = ['Apple', 'Banana', 'Cherry'];
const result = fru.toString();
console.log(result);

//
const fru2=[1, 2, 3];
const result2=fru2.toString();
console.log(result2);

//

const fru3=[1, 2, 3, 4, 5, 6];
const doubled=fru3.map(x=>x*2).toString();
console.log(doubled);

//
const mixedArray=['Hello', 100, true, {name: "John"}];
const reso=mixedArray.toString();
console.log(reso);

//sorting

let fro=[ 'Banana', 'Apple', 'Cherry'];
fro.sort();
console.log(fro);

//
let numo=[-5, -1, 40, 100, 25, 1, 5];
numo.sort(function(a,b){
return a-b;
});
console.log(numo);

//
let numo2=[-1, -2, -8, -4, 0, 40, 2, 10];
numo2.sort(function(a,b){
    return a-b;
});
console.log(numo2);

//
let itms=[
{name: "Tables", price:45},
{name:"Chair", price:10},
{name: "Lamp", price:5}
];
itms.sort(function(a,b){
    return a.price - b.price;
});
console.log(itms);

//

let money=[
{name: "Tables", price:15},
{name:"Chair", price:10},
{name: "Lamp", price:5},
{name:"Chair", price:20},
{name: "Lamp", price:25}
];
money.sort(function(a,b){
    return a.price - b.price;
});
console.log(money);

//
let scores=[10, 20, 30, 40, 5, 1];
scores.sort(function(a, b){
    return b-a;
});
console.log(scores);

// pushing

let frui = ['apple', 'banana', 'cherry'];
let newLength = frui.push('date', 'money', 'pack');
console.log(frui);
console.log(newLength);

//
let num4=[1, 2, 3];
let countNew=num4.push(4, 5, 6);
console.log(num4);
console.log("the new length:", countNew);

//

let originalArray = ['first', 'second'];
let copiedReference = originalArray;
originalArray.push('third');

console.log("Original array:", originalArray);
console.log("Copied reference (should be same as original):", copiedReference);

// map

const numbers = [1, 2, 3, 4, 5];
const multiplied = numbers.map(x => x * 4);
console.log(multiplied);

//

let word = ['apple', 'banana', 'cherry'];
let upperCased =word.map(words=>words.toUpperCase());
console.log(upperCased);

//

let word1 = ['apple', 'banana', 'cherry'];
let lowerCased1 =word1.map(words=>words.toLowerCase());
console.log(lowerCased1);

//

const peopl = [
    { name: "Alice", age: 25 }, 
    { name: "Bob", age: 30 }
];
const agedPeople = peopl.map(person => ({ ...person, age: person.age + 3 }));
console.log(agedPeople);

//

const nmber= [1, 2, 3, 4, 5];
const filteredNumbers = nmber
    .map(x => x * 3).filter(x => x > 10);
console.log(filteredNumbers);

// shift
let frut = ['apple', 'banana', 'cherry'];
let removedElement = frut.shift();
console.log(removedElement); 
console.log(frut);

//
let numbero = [1, 2, 3, 4, 5];
numbero.shift();
console.log(numbero.length); 

//

let emptyAray = [];
let resulte = emptyAray.shift();
console.log(resulte);

//
let queue = ['task1', 'task2', 'task3'];
while (queue.length > 0) {
    let currentTask = queue.shift();
    console.log('Processing: ' + currentTask);
}
//concate
let fruitse = ['apple', 'banana'];
let vegetables = ['carrot', 'beet'];
let grains = ['wheat', 'rice'];
let combinedFood = fruitse.concat(vegetables, grains);
console.log(combinedFood);
//
let array1 = [{ name: 'John' }, { name: 'Jane' }];
let array2 = [{ age: 22 }, { age: 23 }];
let combinedDetails = array1.concat(array2);
console.log(combinedDetails);
//copy with
let numberses = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3, 4);
console.log(numberses);
//
let fruitsee= ['apple', 'banana', 'cherry', 'date', 'fig'];
fruits.copyWithin(1, 2);
console.log(fruitsee);
//
let resetArray = [1, 2, 3, 4, 2, 3];
resetArray.copyWithin(3, 0, 3);
console.log(resetArray);

//enteries to access both the index and the value of each array of elements
const bob=['apple', 'banana', 'cherry'];
const iterator=bob.entries();
for (let [index, fruit] of bob.entries()) {
    console.log(`Index ${index}: ${fruit}`);
}
//

const foods=["pizza", "burger", "pasta"];
let enteriesFoods=foods.entries();

for (let[index, food] of enteriesFoods){
    console.log(`${index}: ${food}`);
}
//
const aa=[1, 2, 3, 4];
const bb=[...aa.entries()];
console.log(bb);
//
const namesi = ["Alice", "Bob", "Charlie"];
const filteredEntries = [...namesi.entries()].filter(([index, name]) => name.startsWith('A'));
console.log(filteredEntries);
//
const mixedArry=[1, 'text', true, 20];
const allnum=mixedArry.every(item=> typeof item ==='number');
console.log(allnum);
//
const values=[2, 4, 6, 8, 10];
const allEven=values.every(value=>value % 2 === 0);
console.log(allEven);

// fill on the array

let myArray=new Array(5);
myArray.fill("apple");
console.log(myArray);
//
let my1=Array(3).fill(0);
console.log(my1);
//
let my2=[1, 2, 3, 4, 5];
my2.fill("bana", 1, 2);
console.log(my2);
//
let boundaryArray = [10, 20, 30, 40, 50];
boundaryArray.fill("orange", 2, 10);
console.log(boundaryArray);

//filter methodes
const pop=[1, 2, 3, 4, 5];
const evenNum=pop.filter(num=> num%2===0);
console.log(evenNum);
//
const peo = [
    { name: "Alice", response: "yes" },
    { name: "Bob", response: "yes" },
    { name: "Charlie", response: "no"}
  ];
  
  const adults = peo.filter(person => person.response === "yes");
  console.log(adults);
  //

const mixedValues = [null, 'hello', undefined, 42];
const validValues = mixedValues.filter(value => value != null && value !== undefined);
console.log(validValues);
//
const mixo=['hello', undefined, 42];
const checking=mixo.filter(value=>value !=undefined);
console.log(checking);
//
const nopop=[1, 2, 3, 4, 5];
const evon=nopop.filter(n=>n%2===0).map(n=>n*2);
console.log(evon);
//find methodes

const number1=[5, 12, 8, 130, 44];
const found=number1.find(element=>element>10);
console.log(found);

//

const fr = ['apple', 'banana', 'mango', 'orange'];
const check=fr.find(fruit=>fruit.startsWith('m'));
const check1=fr.find(fruit=>fruit.endsWith('a'));
console.log(check);
console.log(check1);

//find index of the element
const pets = ['dog', 'cat', 'parrot', 'rabbit'];
const index=pets.findIndex(pet=>pet ==="rabbit")
console.log(index);
//
const people3 = [
    { name: 'John', age: 24 },
    { name: 'Sara', age: 31 },
    { name: 'Peter', age: 24 }
];
const index1=people3.findIndex(person=>person.age===31);
console.log(index1);

//
const num5=[5, 12, 8, 130, 44];
const notExist = num5.findIndex(value=>value>=130);
console.log(notExist);

//flatten or nested array exercise
const array=[1, [2,[3, 4]]];
const flats=array.flat();
const flat2=flats.flat();
console.log(flats);
console.log(flat2);
//
const deepNestedArray = [1, [2, [3, [4, 5]]]];
const flot=deepNestedArray.flat(3);
console.log(flot);
//
const arrayWithEmpty = [1, [], [2, [3]]];
const resolt=arrayWithEmpty.flat(Infinity);
console.log("this is the use of infinity:",resolt);

// array flat map

let arr=[1, 2, [3, 4]];
let flatMapper=arr.flatMap(x=>[x*2]);
console.log(flatMapper);
//
let nestedArr = [1, [2, [3, 4]]];
let reslt = nestedArr.flatMap(x => Array.isArray(x) ? x : [x]);
console.log(reslt);
//

let studonts = [
    {name: 'Alice', scores: [60, 70, 80]},
    {name: 'Bob', scores: [80, 85, 90]}
];
let scoes = studonts.flatMap(student => student.scores.filter(score => score >= 80));
console.log(scoes);
//
let books = [
    {title: "JavaScript", authors: ["Author A", "Author B"]},
    {title: "CSS", authors: ["Author C"]}
];
let authorsList = books.flatMap(book => book.authors.map(author => author.toUpperCase()));
console.log(authorsList);

//foreach methodes
const fruits5 = ['apple', 'banana', 'cherry'];
fruits5.forEach(function(item, index) {
    console.log(index, item);
});
//
const numbers6 = [1, 2, 3];
numbers6.forEach((value, index, arr) => {
    arr[index] = value * 10;
});
console.log(numbers6);
//
const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});
//convert array-like objects(Array from())
const str="Hello";
const strArray=Array.from(str);
console.log(strArray);
//
const mySet = new Set([1, 2, 3]);
const myArraye= Array.from(mySet);
console.log(myArraye);
//
const baseNumbers = [1, 2, 3, 4];
const squares = Array.from(baseNumbers, x => x * x);
console.log(squares);

// includes methodes
const set1 = ['a', 'b'];
const set2 = ['a', 'b', 'c', 'd'];
const isSubset = set1.every(elem => set2.includes(elem));
console.log(isSubset);

//

const numers = [1, 2, 3, 4, 5];
let numberToAdd = 3;
if (numers.indexOf(numberToAdd) === -1) {
    numers.push(numberToAdd);
} else {
    console.log(`${numberToAdd} already exists in the array.`);
}

//
let arre = [1, 2, 3];
let resultu= Array.isArray(arre);
console.log(resultu);

// is array methodes

function testArguments() {
    return Array.isArray(arguments);
}
console.log(testArguments(1, 2, 3));
//

const data = [
    ['Name', 'Age', 'Country'],
    ['Alice', 30, 'USA'],
    ['Bob', 22, 'UK']
];
const csvContent = data.map(row => row.join(',')).join('\n');
console.log(csvContent);
//

const itemse = ['Read', 'Write', 'Speak'];
const html = '<ul><li>' + itemse.join('</li><li>') + '</li></ul>';
console.log(html); 
//

const fruitss = ['Apple', 'Banana', 'Cherry'];
const keys = fruitss.keys();

for (const key of keys) {
    console.log(key);
}
//
const numbers7 = [1, 2, 3, 4, 5];
const totale = numbers7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totale);


// 1.array of string to reverse

reverseAndSort(["cat", "dog", "apple", "banana", "egg"]);

function reverseAndSort(arr){

    let reversed = arr.map(str => str.split('').reverse().join(''));

    reversed.sort();

    let last2 =reversed.slice(-2).sort().reverse();

    reversed.splice(-2,2, ...last2);

    console.log(reversed);
}

//2. an element is negative, else zero

let arra=[0,0];

console.log(checkNum(arra));  

function checkNum(array){

    for ( let num of array){

        if(num > 0) return "postive";

        else if (num < 0) return "negative";
    }

    return "zero";
}


// 3. a function that return a new array of employe

const employes=[{id:1, name: "Alice", salary:5000}];
function updateSalae(employes){
    return employes.map(emp =>({
        id: emp.id,
        name:emp.name,
        salary:emp.salary 
    }));
}
const updated=updateSalae(employes);
console.log(updated);


// 4. function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2

function doubleNum(array){
    array.forEach (num => console.log(num *2))  
}
doubleNum([1, 2, 3]);


//5.modification of array

modifyArray([1,2,3,4,5])

function modifyArray(numbers){

    for (let i=0; i< numbers.length; i++){
        
        if (i < 4) {
            numbers[i] *= 8;
        }else if (i >= numbers.length -2){
            numbers[i] += 5;
        }
    }
    console.log(numbers);
}
//
for (let i = 1; i <= 5; i++) {
    if (i ==2) continue;
    console.log(i);
}
//
let day = 3;
switch (day) {
  case 1:console.log("Sunday");
break;
  case 2: console.log("Monday");
break;
  case 3:console.log("Tuesday");
break;
  case 4:console.log("Wednesday");
break;
  case 5:console.log("Thursday");
break;
  case 6:console.log("Friday");
break;
  case 7:console.log("Saturday");
break;
  default:console.log("Invalid day");

}

let marks = 85;
let grade;
switch (true) {
  case (marks >= 90):
    grade = "A";
    break;
  case (marks >= 80):
    grade = "B";
    break;
  case (marks >= 70):
    grade = "C";
    break;
  case (marks >= 60):
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Grade:", grade);
//
let person = { firstName: "Ramesh", lastName: "Fadatare", age: 30 };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
//
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum:", sum);

//
const student={
    firstName: "Jack",
    rollNo:32
  
  };
  
  console.log(student);
  //
  const objectName={name: ("john", "bone", "bro"), age: (20, 90)};
  console.log(objectName);
  console.log(objectName.name);
  console.log(objectName["name"]);

  //
  const person1m={
    name: "bobby",
    hobby: "Dancing",
  };
  console.log(person1m);
  person1m.hobby="Singing";
  console.log(person1m);
  //
  const stuDent={
    name: "lome",
    age: 20,
    salary: 2000,
  };
  stuDent.rollno=12;
  stuDent.facualty="maths";
delete stuDent.salary
  console.log(stuDent);
  //

  const pero={
    name: "bro",
    age: 30,
      greet: function(){
        console.log("bob says hi, and he is said i am 23 ");
      }
  };
  pero.greet();
  //
  const dog={
    name: "Rocky",

    bark: function(){
        console.log("Woof");
    }
  };
  dog.bark();
  //
  const pick={
    name:"bro",
    age:30,

    introduce: function(){
        console.log(`my name is ${this.name} and I am ${this.age} years old.`)
    }
  };
  pick.introduce();
//
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log(car);
//
let person4 = {
    firstName: "Ramesh",
    lastName: "Fadatare",
    age: 30
  };
  
  for (let key in person4) {
    console.log(key + ": " + person4[key]);
  }
  //
  let students0 = [
    { name: "Amit", age: 20 },
    { name: "Neha", age: 22 },
    { name: "Ramesh", age: 19 }
  ];
  
  let totalAge = 0;
  
  for (let student of students0) {
    totalAge += student.age;
  }
  
  let averageAge = totalAge / students0.length;
  console.log("Average age:", averageAge);

  //

  let peop = [
    { name: "Amit", age: 20 },
    { name: "Neha", age: 25 },
    { name: "Ramesh", age: 22 }
  ];
  
  let oldest = peop[0];
  
  for (let person of peop) {
    if (person.age > oldest.age) {
      oldest = person;
    }
  }
  
  console.log("Oldest person:", oldest.name);

  //
  let pe = [
    { name: "Amit", age: 20 },
    { name: "Neha", age: 22 },
    { name: "Ramesh", age: 20 },
    { name: "Priya", age: 22 }
  ];
  
  let groupedByAge = {};
  
  for (let person of pe) {
    if (!groupedByAge[person.age]) {
      groupedByAge[person.age] = [];
    }
    groupedByAge[person.age].push(person.name);
  }
  
  console.log(groupedByAge);

  ///
  let originl = {
    name: "Amit",
    age: 25
  };
  
  let clone = Object.assign({}, originl);
  console.log(clone);

  //Object question
  let mane={
    firstName: "Ramed",
    lastName: "fada",
    age: 30,
    occupation: "Engineer"
};
console.log(mane.firstName + " " + mane.lastName);
console.log(mane["firstName"]);

////
let cher={
  fn: "rame",
  ln: "bane",

  full: function(){
    return this.fn + " " + this.ln
  }
};
console.log(cher.full());

/////
let pope={
  fn: "rame",
  ln: "mano",
  age: 20
};

for (let key in pope){
  console.log(key + ":" + pope[key]);
}

////
let studento = {
  name: "Priya",
  age: 21,
  address: {
    street: "MG Road",
    city: "Bangalore",
    state: "Karnataka"
  }
};
console.log(studento.address.city);