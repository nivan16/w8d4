var readline = require("readline");
let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Please enter a Number!!", (answer) => {
      sum+= parseInt(answer);
      console.log(sum);
      numsLeft-- ;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }

  if(numsLeft === 0){
    completionCallback(sum);
    reader.close();
  }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));