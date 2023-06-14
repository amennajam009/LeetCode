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

// ----------------------------------------------------------------------------------------
//If i want to call the last one from the normal function
const LastonefromArray = (arr) =>{
 return arr.length ===0? arr.length -1 : arr[arr.length -1]
}
const Myarry = ['Number1','Number2','Number3','Number4','Number5']
console.log(LastonefromArray(Myarry))

