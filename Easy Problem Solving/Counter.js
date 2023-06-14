//Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)

const Myfunction = (n) =>{
 let Conuternumber = n;
 function incrementfunction(){
    const current = Conuternumber;
    Conuternumber++
    return current
 }
 return incrementfunction
}

const Mycounter = Myfunction(10)
console.log(Mycounter());
console.log(Mycounter());
console.log(Mycounter());