// logal operter
// && oper
// T T T
// T F F
// F T F
// F F F
// OR || OPR
// T T T
// T F T
// F T T
// F F F
// NOT !
// T F
// F T
console.log("setart");
const total=85+90+80;
const mark=(total/300)*100;
console.log("percentage",mark);

// let mark=45;
if(mark>80 && mark<=100){
    console.log("A");
    
}
else if(mark>=60 && mark<80){
    console.log("B"); 
  }
else if(mark>=40 && mark<60){
    console.log("C");  
 }
else if(mark>=30 && mark<40){
    console.log("D");  
 }

else if(mark<0 || mark>100){
    console.log("invalid");
  }
 else{
        console.log("Fail");        
    }

