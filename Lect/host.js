// console.log(a);
// var a=54;
// let a=43

// sub();
// {
// function sub(){
//     console.log("the sum fuction is running");
    
// }}
try {
    console.log("the code is runing");
    
} catch (error) {
    console.error(`The code is not runinr ${error.message}`);
    
}


function getMonthName(monthIndex) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  try {
    // Attempt to access an array element
    if (monthIndex < 0 || monthIndex > 11) {
        throw new RangeError('Invalid month index'); // Manually throw a custom error
    }
    console.log(`Month is: ${months[monthIndex]}`);
  } catch (err) {
    console.error(`Error: ${err.message}`); // Log the error message
  } finally {
    console.log('Execution complete.'); // This always runs
  }
}

getMonthName(1);
getMonthName(13); 
