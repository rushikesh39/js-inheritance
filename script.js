// Q1
let parent = {
    fname: "Rushi",
    lname:"Thange",
    fullName : function callMe(){
        console.log(this.fname+'  '+this.lname);
    }
  };
  
  
  let child = {
    __proto__:parent
  }
child.fullName();

// Q2
let GrandParent={
    fName:'Rushikesh'
}
let Parent={
    mName:'Ramdas',
    __proto__:GrandParent
}
let Child={
    lName:'Thange',
    __proto__:Parent

} 
console.log(Child.fName+" "+Child.mName+" "+Child.lName)

// Q3
 let calculate = {
  sum: function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    console.log(result);
  }
}
calculate.sum([1,2,3,4]);

// Q4
let obj1={
  name1:'abc'
}
let obj2={
  name2:'pqr',
  __proto__:obj1,
  
  
}

function retrive(){
  console.log('Names',obj2.name1+"  "+obj2.name2)
}
retrive()



  


  