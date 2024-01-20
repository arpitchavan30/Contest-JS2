let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloperbyforEach() {
    //Write your code here , just console.log
    arr.forEach((Employee) => {
      if(Employee.profession === "developer"){
        console.log(Employee);
      }
    });
    

  }
  
  function addData() {
    //Write your code here, just console.log
    const newName = {id:4, name:"susan", age:"20", profession:"intern"}
         arr.push(newName);
         console.log(newName);  
}
  
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredArr = arr.filter((Employee)=>Employee.profession !== "admin")
   console.log(filteredArr);  
}
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray =[
        { id: 4, name:"alice",age:"22",profession:"designer"},  
        { id: 5, name:"bob",age:"25",profession:"analyst"},  
        { id: 6, name:"dave",age:"28",profession:"manager"},  
      ];
    const concatenateArray = arr.concat(newArray);
    console.log(concatenateArray);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
    console.log(concatenateArray);
    
  }