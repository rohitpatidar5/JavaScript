//for loop
for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log(i);
    
}





//while loop
let i =0;
while(i<10)
    {
        i++;
        //console.log(i);
    }




//do while
let j=0;
    do {
        j++;
//console.log(j)
    } while (j<10);






//for of loop
//object is not iteratable by for of loop
let arr = [1,2,3,4,5]

for (const it of arr) {
    // console.log(it)
}

//maps -->object which hold the key value pairs, diffrent form the map loop    map is iteratable
//UIQUE AND REMEMBER THE ORDER OF INSERTIOIN

const map = new Map();
map.set('USA', "united state of america")
map.set('IN', "India")
map.set('Fr', "Frnace")
map.set('IN', "India")

// console.log(map);
for(const key of map)
{
    // console.log(key);
}

for(const [key, value] of map)  //array destructure
    {
       // console.log(key,':-', value)
    }



    
//for in loop
//not for for in loop because for in loop in not iteratable

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby"
}
for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`)
}

const programming = ['js', 'cpp', 'ruby', 'java']

for (const it in programming)
{
    // console.log(programming[it])
}

   

//foreach loop --> higher order function  , it does not return any value

const coding = ["js","ruby","java", "python", "cpp"]

coding.forEach((item)=>{
    // console.log(item)
})


function printme(item){  
    // console.log(item)
}

coding.forEach(printme)  //only the reference not to execute it here we use already define function

coding.forEach((item, index, arr) => {  //it has tree value
// console.log(item, index, arr)
})

//[{},{},{}]
const mycoding =[
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    
]

mycoding.forEach((item)=>{
    // console.log(item.languageFileName)
})




//filter --> return the values
const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num)=> num>4 );
const newNums = myNums.filter ( (num)=> {
    return num;
})
console.log(newNums);




//map

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNumbers =myNumbers.map( (item)=>{
//     return item+10
// })
// console.log(newNumbers);





//chaining
//.map().map().filter()

const newNumbers = myNumbers.map( (nums)=> nums * 10).map( (nums)=> nums + 1).filter((nums) => nums> 50)
console.log(newNumbers);




//reduce
const myValues = [1,2,3]
const myTotal = myValues.reduce( (acc, currval)=>{
console.log(`value of acc ${acc}`);
    return acc + currval
}, 0)

console.log(myTotal);