// In this Problem we're supposed to return the last one from the Array 

Array.prototype.last = function(){
    if(this.length ===0){
        return -1 // Return -1 if the array is empty
    }
    return this[this.length -1] // Return the last element of the array
}

const Myarr = [1,2,3,4]
console.log(Myarr.last())