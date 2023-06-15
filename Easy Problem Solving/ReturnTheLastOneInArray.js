// In this Problem we're supposed to return the last one from the Array 

Array.prototype.last = function(){
    if(this.length ===0){
        return -1 // Return -1 if the array is empty
    }
    return this[this.length -1] // Return the last element of the array
}

const Myarr = [1,2,3,4]
console.log(Myarr.last())






//Its optimize Way 
Array.prototype.last = function(){
    return this.length===0? this.length -1 : this[this.length -1]
}
const Myarr2 = [1,2,3,4,5,6]
//const Myarr2 = [] //If that Array is empty then it will return us -1
console.log(Myarr2.last())



//Now what if i want to call the last one from array with simple function 

const Myfunction = (arr) =>{
    return arr.length===0 ? arr.length -1 : arr[arr.length -1]
}
const Myarr3 = [1,2,3,4,5,6,7]
console.log(Myfunction(Myarr3))

//Again Pratice 

const MyotherFunction = (arr) =>{
   return arr.length===0 ? arr.length -1 : arr[arr.length -1]
}
const MyArr2 = ['number1' , 'number2' , 'number3' , 'number4']
console.log(MyotherFunction(MyArr2))



// Promt function that if i enter the Array of number so it should return me the last index of array otherwise if i pass the empty array so it should return me -1

const Myfunction2 = () =>{
    let Givennumber = prompt('Enter Your Number Array');
    Givennumber = Givennumber.toString()
    return Givennumber.length===0?Givennumber.length -1 : Givennumber[Givennumber.length -1];
}
console.log(Myfunction2())