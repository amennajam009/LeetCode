// In this we're calling 3 function in one function we'll increment decrement and reset the value of function
const create3Function = (value) =>{
 let currentvalue = value
   
  function increment(){
    currentvalue++
    return currentvalue
  }
  function decrement(){
    currentvalue--
    return currentvalue
  }
  function reset(){
    let currentvalue = value
     return currentvalue
  }
  return{
    increment,
    decrement,
    reset
  }

}
const counterII = create3Function(10)
console.log(counterII.increment())
console.log(counterII.decrement())
console.log(counterII.reset())


// Optimized Way 

const Myfunction = (value) =>{
   let numberToPlay = value
   return{
    increment:()=> ++numberToPlay,
    decrement:()=> --numberToPlay,
    reset:()=> numberToPlay = value
   }   
}
const counter = Myfunction(10)
console.log(counter.increment())
console.log(counter.decrement())